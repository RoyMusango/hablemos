// Voix : synthèse (voix espagnole native uniquement) et reconnaissance vocale.
(function (global) {
  const synth = global.speechSynthesis;
  const FEMALE = /elvira|ximena|abril|helena|laura|esperanza|irene|estrella|vera|triana|lia|elena|monica|mónica|paulina|google español$/i;
  const MALE = /alvaro|álvaro|pablo|arnau|dario|darío|elias|elías|nil|saul|saúl|teo|alex|enrique|jorge|jorge|raul|raúl|diego|jordi/i;

  let voices = [];
  function quality(v) {
    return (/natural|neural/i.test(v.name) ? 10 : 0) + (/online/i.test(v.name) ? 3 : 0) + (/google/i.test(v.name) ? 5 : 0);
  }
  function loadVoices() {
    const all = synth ? synth.getVoices() : [];
    // Espagnol d'Espagne en priorité, puis les autres variantes de l'espagnol. Jamais une voix d'une autre langue.
    voices = all.filter(v => /^es([-_]|$)/i.test(v.lang))
      .sort((a, b) => (isSpain(b) - isSpain(a)) || (quality(b) - quality(a)));
    global.dispatchEvent(new Event('voiceschanged-es'));
  }
  const isSpain = v => /^es[-_]ES$/i.test(v.lang) ? 1 : 0;
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }

  const spainVoices = () => voices.filter(isSpain);
  function genderOf(v) { return FEMALE.test(v.name) ? 'f' : MALE.test(v.name) ? 'm' : '?'; }

  // Voix choisie dans les réglages, ou la meilleure voix d'Espagne. `gender` permet de varier selon le personnage.
  function pickVoice(gender) {
    const pool = spainVoices().length ? spainVoices() : voices;
    if (gender && pool.length > 1) {
      const g = pool.filter(v => genderOf(v) === gender).sort((a, b) => quality(b) - quality(a));
      if (g.length) return g[0];
    }
    return pool.find(v => v.voiceURI === Store.settings.ttsVoice) || pool[0] || null;
  }

  function status() {
    if (!synth) return { ok: false, msg: 'Ce navigateur ne sait pas lire à voix haute.' };
    if (!voices.length) return { ok: false, msg: 'Aucune voix espagnole disponible. Ouvre l’app dans Microsoft Edge (voix neuronales d’Espagne) ou Chrome (« Google español »).' };
    if (!spainVoices().length) return { ok: true, warn: true, msg: 'Seules des voix d’Amérique latine sont disponibles. Pour l’accent d’Espagne, utilise Edge ou Chrome.' };
    const best = spainVoices()[0];
    if (!quality(best)) return { ok: true, warn: true, msg: 'Voix d’Espagne disponible mais synthétique. Edge propose des voix neuronales bien plus naturelles.' };
    return { ok: true, msg: best.name };
  }

  let warned = false;
  function speak(text, { rate, onend, gender } = {}) {
    const done = () => onend && onend();
    if (!synth || !text) return done();
    const voice = pickVoice(gender);
    if (!voice) {
      if (!warned) { warned = true; global.dispatchEvent(new CustomEvent('tts-missing', { detail: status().msg })); }
      return done(); // ne jamais lire de l'espagnol avec une voix étrangère
    }
    synth.cancel();
    // Chrome coupe les longs textes : lecture phrase par phrase.
    const parts = text.replace(/\s+/g, ' ').split(/(?<=[.!?…])\s+/).filter(p => p.trim());
    parts.forEach((p, i) => {
      const u = new SpeechSynthesisUtterance(p.trim());
      u.voice = voice; u.lang = voice.lang;
      u.rate = rate || Store.settings.ttsRate;
      if (i === parts.length - 1) { u.onend = done; u.onerror = done; }
      synth.speak(u);
    });
  }
  function stopSpeaking() { synth && synth.cancel(); }

  // --- Reconnaissance vocale ---
  const SR = global.SpeechRecognition || global.webkitSpeechRecognition;

  class Listener {
    constructor({ onText, onState, onAutoStop, lang = 'es-ES' }) {
      this.onText = onText; this.onState = onState; this.onAutoStop = onAutoStop;
      this.lang = lang; this.active = false; this.finalText = ''; this.silenceTimer = null;
    }
    start({ autoStopAfterSilence = 0 } = {}) {
      if (!SR) { alert('La reconnaissance vocale n’est pas disponible dans ce navigateur. Utilise Chrome ou Edge.'); return; }
      stopSpeaking();
      this.finalText = ''; this.active = true; this.autoStop = autoStopAfterSilence;
      this.startedAt = Date.now();
      this._open();
      this.onState && this.onState(true);
    }
    _open() {
      const r = new SR();
      r.lang = this.lang; r.continuous = true; r.interimResults = true;
      r.onresult = (e) => {
        let interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const res = e.results[i];
          if (res.isFinal) this.finalText += (this.finalText ? ' ' : '') + res[0].transcript.trim();
          else interim += res[0].transcript;
        }
        this.onText && this.onText(this.finalText, interim);
        if (this.autoStop) {
          clearTimeout(this.silenceTimer);
          this.silenceTimer = setTimeout(() => { if (this.active && this.finalText) this.stop(true); }, this.autoStop);
        }
      };
      r.onerror = (e) => {
        if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
          alert('Accès au micro refusé. Autorise le micro pour cette page (icône à gauche de l’adresse) et lance l’app via lancer.bat.');
          this.active = false;
          this.onState && this.onState(false);
        }
      };
      // Chrome coupe après un silence : on relance tant que l'utilisateur n'a pas arrêté.
      r.onend = () => { if (this.active) { try { this._open(); } catch (e) { } } };
      this.rec = r;
      r.start();
    }
    stop(auto = false) {
      if (!this.active) return this.finalText;
      this.active = false;
      clearTimeout(this.silenceTimer);
      try { this.rec && this.rec.stop(); } catch (e) { }
      Store.day().speakSec += Math.min((Date.now() - this.startedAt) / 1000, 300);
      Store.save();
      this.onState && this.onState(false);
      if (auto && this.onAutoStop) this.onAutoStop(this.finalText);
      return this.finalText;
    }
  }

  global.Speech = { speak, stopSpeaking, Listener, status, genderOf, isSpain, get voices() { return voices; }, supported: !!SR, loadVoices };
})(window);

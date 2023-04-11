export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.options = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };
  }

  getCustom() {
    return this.default;
  }

  setCustom(key, value) {
    if (this.default.has(key) && this.options[key].includes(value)) {
      this.default.set(key, value);
    } else {
      throw new Error('Unknown key or value');
    }
  }
}

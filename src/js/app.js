import Settings from './settings.js';

const settings = new Settings();
console.log(settings.getCustom());
settings.setCustom('music', 'chillout');
console.log(settings.getCustom());

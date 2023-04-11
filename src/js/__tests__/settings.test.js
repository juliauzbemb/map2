import Settings from '../settings.js';

const settings = new Settings();

test('test getting default settings', () => {
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(settings.getCustom()).toEqual(expected);
});

test('test custom settings', () => {
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'chillout'],
    ['difficulty', 'easy'],
  ]);
  settings.setCustom('music', 'chillout');
  expect(settings.getCustom()).toEqual(expected);
});

test('test custom settings throwing error due to key error', () => {
  expect(() => { settings.setCustom('genre', 'chillout'); }).toThrow(new Error('Unknown key or value'));
});

test('test custom settings throwing error due to value error', () => {
  expect(() => { settings.setCustom('music', 'country'); }).toThrow(new Error('Unknown key or value'));
});

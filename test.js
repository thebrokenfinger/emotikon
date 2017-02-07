import test from 'ava';
import emoji from './';

test(t => {
  t.is(typeof emoji, 'object');
  t.is(emoji.tm, '™️');
  t.is(Object.keys(emoji).length, 1341);
});

const logUpdate = require('log-update');
const emotikon = require('./');
const emoji = Object.keys(emotikon);
let i = 0;

setInterval(() => {
  const emo = emotikon[emoji[i = ++i % emoji.length]];
  logUpdate(`\n${emo}\t ${emoji[i]}\t ${emo}\n`);
}, 300);

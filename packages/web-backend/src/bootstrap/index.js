const database = require('@trivia-game/module-models');
const express = require('./express');

async function bootstrap() {
  express();
  await database.initialize();
}

module.exports = bootstrap;

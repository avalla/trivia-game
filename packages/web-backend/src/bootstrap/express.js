const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const logger = require('@trivia-game/module-logger');
const { database } = require('@trivia-game/module-models');

const config = require('../config');

const routes = require('../routes');

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:8000', config.frontendUrl],
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true,
  })
);
app.use(bodyParser.json({ limit: '4mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compression());
app.use(helmet());
const store = new SequelizeStore({
  db: database,
});
store.sync();
app.use(
  session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    key: 'express.sessionID',
    store: new SequelizeStore({
      db: database,
    }),
  })
);

function initialize() {
  logger.info('Start listening on port %d', config.port);
  routes(app);
  const server = app.listen(config.port, 'localhost', () => {
    logger.info(`  Server started on port %d (%s) - http://localhost:${config.port}`, config.port, config.env);
  });
  logger.info('  Process started: %d', process.pid);
  function handleExit(signal) {
    logger.info('    >>> Received %s on pid %s. Closing application. <<<', signal, process.pid);
    server.close();
  }
  process.on('uncaughtException', (err) => {
    logger.error('Uncaught exception: %s', err.message);
    logger.info('%O', err);
  });
  process.on('SIGINT', handleExit);
  process.on('SIGQUIT', handleExit);
  process.on('SIGTERM', handleExit);
}

module.exports = initialize;

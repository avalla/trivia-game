# Models

Provides connectivity to database and models.

## How to use

Import module and use it for logging.

```javascript
const models = require('@trivia-game/module-models');

models.User.something(); // See details on sequelize documentation
```

See [sequelize documentation](https://sequelize.org/master/index.html) for further help.

## Environment variables

Choose correct `SQLITE_PATH` for sqlite database.

```env
SQLITE_PATH=/tmp/trivia.sqlite
```

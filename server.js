// connects path utility
const path = require('path');
// connects the express node framework, which enables the creation of CRUD routes on a server-side API
const express = require('express');
// connects the session npm, for cookie-based sessions
const session = require('express-session');
// connects handlebars MVC package
const exphbs = require('express-handlebars');
// imports controller routes
const routes = require('./controllers');
// imports custom helpers
const helpers = require('./utils/helpers');
// connects sequelize connection config
const sequelize = require('./config/connection');
// connects sequelize store, an SQL session store using Sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// creates express application
const app = express();
// sets constant equal to application port
const PORT = process.env.PORT || 3001;
// incorporate custom helper methods
const hbs = exphbs.create({ helpers });
// sets up session
const sess = {
  // sets secret to sign session ID's
  secret: 'biometric',
  // cookie settings
  cookie: {},
  // sets whether unmodified sessions saved to store after request
  resave: false,
  // sets whether unmodified sessions saved to store when new
  saveUninitialized: true,
  // sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// use session middleware
app.use(session(sess));
// middleware config for handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// middleware config for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// serves content from routes folder
app.use(routes);
// syncs models in db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now Listening'));
});

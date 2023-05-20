const { User } = require('../models');

const userData = [
  {
    id: 1,
    name: 'MickeyMouse',
    email: 'mickey@email.com',
    password: 'redshorts',
  },
  {
    id: 2,
    name: 'BugsBunny',
    email: 'bugs@email.com',
    password: 'whatsupdoc',
  },
  {
    id: 3,
    name: 'TweetyBird',
    email: 'tweety@email.com',
    password: 'kittyfawdown',
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUsers;

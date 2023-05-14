const { User } = require('../models');

const userData = [
  {
    name: 'Mickey Mouse',
    email: 'mickey@email.com',
    password: 'redshorts',
  },
  {
    name: 'Bugs Bunny',
    email: 'bugs@email.com',
    password: 'whatsupdoc',
  },
  {
    name: 'Tweety Bird',
    email: 'tweety@email.com',
    password: 'kittyfawdown',
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUsers;

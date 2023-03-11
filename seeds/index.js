const sequelize = require('../config/connection');
const seedUsers = require('./users');
const seedPosts = require('./posts');
const seedComments = require('./comments');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------CONNECTED TO DB---------')
  await seedUsers();
  console.log('--------USERS SEEDED---------');
  await seedPosts();
  console.log('--------POSTS SEEDED---------');
  await seedComments();
  console.log('--------COMMENTS SEEDED---------');
  process.exit(0);
};

seedAll();

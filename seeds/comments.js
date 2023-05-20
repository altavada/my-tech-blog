const { Comment } = require('../models');

const commentData = [
  {
    body: `Etiam venenatis rhoncus urna id malesuada. In ut dignissim ex, vel tristique nunc.`,
    author_id: 2,
    parent_id: 1,
  },
  {
    body: `Vivamus consectetur tristique ante. Nullam a nisl in diam tincidunt laoreet sed nec nisl.`,
    author_id: 3,
    parent_id: 2,
  },
  {
    body: `Maecenas porttitor volutpat elementum. Integer a odio at mi feugiat viverra.`,
    author_id: 1,
    parent_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;

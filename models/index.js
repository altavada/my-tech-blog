const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'author_id',
});

Post.hasOne(User, {
  foreignKey: 'author_id',
});

User.hasMany(Comment, {
  foreignKey: 'author_id',
});

Comment.hasOne(User, {
  foreignKey: 'author_id',
});

Post.hasMany(Comment, {
  foreignKey: 'parent_id',
});

Comment.hasOne(Post, {
  foreignKey: 'parent_id',
});

module.exports = {
  User,
  Post,
  Comment,
};

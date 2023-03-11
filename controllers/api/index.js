const router = require('express').Router();
const postingRoutes = require('./posting-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
router.use('/post', postingRoutes);
router.use('/users', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;

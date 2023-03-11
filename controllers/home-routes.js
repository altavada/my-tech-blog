const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const pageData = await Post.findAll({
      include: [{ all: true }],
    });
    if (!pageData) {
      res.status(404).json({ message: 'Data not found.' });
      return;
    }
    const pageContent = pageData.map((post) => post.get({ plain: true }));
    res.render('posts', {
      pageContent,
      loggedIn: req.session.loggedIn,
    });
    res.status(200).json(pageContent);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  } 
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;

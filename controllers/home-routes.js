const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const pageData = await Post.findAll({
      order: [['id', 'DESC']],
      include: [
        { model: User, as: 'user' },
        {
          model: Comment,
          as: 'comments',
          include: [{ model: User, as: 'user' }],
        },
      ],
    });
    if (!pageData) {
      res.status(404).json({ message: 'Data not found.' });
      return;
    }
    const pageContent = pageData.map((post) => post.get({ plain: true }));
    console.log('Page Content: ', pageContent);
    console.log('Current User: ', req.session.user);
    if (req.session.loggedIn) {
      res.render('posts', {
        pageContent,
        loggedIn: true,
        currentUser: req.session.user,
      });
    } else {
      res.redirect('/login');
    }
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

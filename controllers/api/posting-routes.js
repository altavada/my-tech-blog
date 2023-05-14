const router = require('express').Router();
const { Post, User } = require('../../models');

// get new post page
router.get('/', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.render('post', {
        header: 'New Post',
        title: null,
        body: null,
        postId: '0',
        mode: 'submit-new',
      });
    } else {
      res.redirect('/login');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get update post page
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: { model: User, as: 'user' },
    });
    const post = postData.get({ plain: true });
    console.log('Post: ', post);
    if (post.user.name == req.session.user) {
      res.render('post', {
        header: 'Edit Post',
        title: post.title,
        body: post.body,
        postId: post.id,
        mode: 'submit-edit',
      });
    } else {
      // res.redirect('/');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body,
      author_id: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update post
router.put('/:id', async (req, res) => {
  try {
    const update = await Post.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: {
          id: req.params.id,
          author_id: req.session.userId,
        },
      }
    );
    if (!update) {
      res.status(404).json({ message: 'Unable to update post.' });
      return;
    }
    res.status(200).json(update);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a post
router.delete('/:id', async (req, res) => {
  try {
    const target = await Post.destroy({
      where: {
        id: req.params.id,
        author_id: req.session.userId,
      },
    });
    if (!target) {
      res.status(404).json({ message: 'Unable to delete post.' });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

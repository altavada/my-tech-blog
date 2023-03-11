const router = require('express').Router();
const { Comment } = require('../../models');

// new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      body: req.body.body,
      author_id: req.session.userId,
      parent_id: req.body.parent_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update comment
router.put('/:id', async (req, res) => {
  try {
    const update = await Comment.update(
      {
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
      res.status(404).json({ message: 'Unable to update comment.' });
      return;
    }
    res.status(200).json(update);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a comment
router.delete('/:id', async (req, res) => {
  try {
    const target = await Comment.destroy({
      where: {
        id: req.params.id,
        author_id: req.session.userId,
      },
    });
    if (!target) {
      res.status(404).json({ message: 'Unable to delete comment.' });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

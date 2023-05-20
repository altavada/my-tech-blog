const router = require('express').Router();
const { User } = require('../../models');

// create new account
router.post('/', async (req, res) => {
  try {
    const newUserData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = newUserData.name;
      req.session.userId = newUserData.id;
      res.status(200).json(newUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login existing account
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    // console.log('User data:', userData);
    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password.' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password.' });
      return;
    }
    console.log('userdata id: ', userData.id);
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = userData.name;
      req.session.userId = userData.id;
      res.status(200).json(userData);
    });
    console.log('session id: ', req.session.userId);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const userModel = require('./users');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

// Configure Passport to use the local strategy
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/feed', function (req, res, next) {
  res.render('feed');
});

router.get('/profile', isLoggedIn, function (req, res, next) {
  res.render('profile');
});

router.post('/register', function (req, res) {
  const { username, email, fullname } = req.body;
  const userData = new userModel({ username, email, fullname });

  userModel
    .register(userData, req.body.password)
    .then(function () {
      // Authenticate the user after successful registration
      passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
      })(req, res);
    })
    .catch(function (err) {
      res.status(500).send(err.message);
    });
});


router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  }),
  function (req, res) {}
);

router.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

module.exports = router;

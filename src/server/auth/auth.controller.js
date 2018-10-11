const jwt = require('jsonwebtoken');

const express = require('express');

const router = express.Router();

const User = require('./auth/model.js');

// const bcrypt = require('bcrypt');


//

router.get('/signup', (req, res) => {
  res.status(200).render('users/signup.hbs');
});

router.post('/signup', (req, res) => {
    // Create User and JWT
  const user = new User(req.body);
    // if (req.body.adminCode === process.env.ADMIN_CODE) {
    //     new User.isAdmin = true;
    // }
  user.save().then(user => {
    const token = jwt.sign(
        {
          _id: user._id
        },
            process.env.SECRET,

          {
            expiresIn: '60 days'
          }
        );
    res.cookie('nToken', token, {
          maxAge: 900000,
          httpOnly: true
      });
        res.status(200).redirect('/');
    });
});

// LOGIN FORM
router.get('/login', (req, res) => {
  res.status(200).render('users/login.hbs');
});

// LOGIN
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
    // Find this user name
  User.findOne({ username }, 'username password')
        .then(user => {
          if (!user) {
                // User not found
                res.status(401).send({ message: 'no denied' });
            }
            // Check the password
          user.comparePassword(password, (err, isMatch) => {
              if (!isMatch) {
                    // Password does not match
                    res.status(401).send({ message: 'no denied' });
                }
                // Create a token
                const token = jwt.sign(
                    { _id: user._id, username: user.username },
                    process.env.SECRET,
                    { expiresIn: '60 days' }
                );
                // Set a cookie and redirect to root
                res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
                res.status(200).redirect('/');
            });
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    res.status(200).redirect('/');
});

module.exports = router;

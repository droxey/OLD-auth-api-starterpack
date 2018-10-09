const express = require('express');

const router = express.Router();

const character = require('./character.model.js');

// const user = require('../auth/auth.model.js');

// index;

router.get('/', (req, res) => {
  const currentUser = req.user;
  if (currentUser === null) {
    res.redirect('/portlandia/user/login');
  }
  Character.find({})
    .then(character) => {
      res.status(200).json({ character, message: 'Get all characters' });
    }
    .catch(err) => {
      console.log(err.message);
    };
});

// new

router.get('/new', (req, res) => {
  const currentUser = req.user;
  if (currentUser === null) {
    return res.redirect('/portlandia/user/login');
  }
  res.status(200).render('characters/new.hbs');
});

//create

router.post('/', (req, res) => {
  const character = new Character(req.body);
  character.save();
  res.status(200).json({
    character,
    message: 'You have submitted a new character'
  });
});

// show

router.get('/:id', (req, res) => {
  const currentUser = req.user;
  if (currentUser === null) {
    return res.redirect('/portlandia/user/login');
  }
  Character.findById(req.params.id)
    .then(character) => {
      res
        .staus(200)
        .json({
          character,
          message: 'Here is the character you selected'
        })
        .catch(err) => {
          console.log(err.message);
        };
    };
});

// Edit

router.get('/:id/edit', (req, res) => {
  Character.findById(req.params.id, (err, character) => {
    res.render('characters/edit.hbs', { character });
  });
});

router.put('/:id', (req, res) => {
  const currentUser = req.user;
  if (currentUser === null) {
    return res.redirect('/portlandia/user/login');
  }
  Character.findByIdAndUpdate(req.params.id, req.body, (err, character) => {
    res.status(200).redirect('/');
  }).catch(err => {
    console.log(err.message);
  });
});

//  delete

router.delete('/:id', (req, res) => {
  const currentUser = req.user;
  if (currentUser === null) {
    return res.redirect('/portlandia/user/login');
  }
  Character.findByIdAndRemove(req.params.id, (err, character) => {
    res.status(200).redirect('/');
  }).catch(err => {
    console.log(err.message);
  });
});

module.exports = router;

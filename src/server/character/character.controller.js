const express = require('express');

const router = express.Router();

const Character = require('./character.model.js');

// const User = require('../auth/auth.controller.js');
// index;
router.get('/', (req, res) => {
  // const currentUser = req.user;
  // if (currentUser === null) {
  //   res.redirect('/portlandia/user/login');
  // }
  Character.find({})
        .then(character => {
          res.status(200).json({ character, message: 'Get all character' });
        })
        .catch(err => {
          console.log(err.message);
        });
});
// new
router.get('/new', (req, res) => {
  // const currentUser = req.user;
  // if (currentUser === null) {
  //   res.redirect('/portlandia/user/login');
  // }
  res.status(200).render('characters/new.hbs');
});

//  create

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
  // const currentUser = req.user;
  // if (currentUser === null) {
  //   res.redirect('/portlandia/user/login');
  // }
  Character.findById(req.params.id).then(character => {
    res.status(200)
            .json({
              character,
              message: 'Here is the character that you selected'
            })
            .catch(err => {
              console.log(err.message);
            });
  });
});

//  Edit
router.get('/:id/edit', (req, res) => {
  Character.findById(req.params.id, (err, character) => {
    res.render('characters/edit.hbs', { character });
  });
});

router.put('/:id', (req, res) => {
  // const currentUser = req.user;
  // if (currentUser === null) {
  //   res.redirect('/portlandia/user/login');
  // }
  Character.findByIdAndUpdate(req.params.id, req.body, (err, character) => {
    res.status(200).redirect('/');
  }).catch(err => {
      console.log(err.message);
    });
});
//  delete
router.delete('/:id', (req, res) => {
  const currentUser = req.user;
  // if (currentUser === null) {
  //   res.redirect('/portlandia/user/login');
  // }
  Character.findByIdAndRemove(req.params.id, (err, character) => {
    res.status(200).json('Character deleted');
  }).catch(err => {
    console.log(err.message);
  });
});

//seed

router.get('/seed/characters', (req, res) => {
    const newCharacters = [
     {
       name: 'Fred',
       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fred_Armisen_2014_cropped_and_retouched.jpg/220px-Fred_Armisen_2014_cropped_and_retouched.jpg',
       episodes: 77
     },
     {
       name: 'Carrie',
       image: 'https://static.stereogum.com/uploads/2018/02/carrie-brownstein-2018-1517865210-640x550.jpg',
       episodes: 77
     },
     {
       name: 'Peter',
       image: 'https://nyoobserver.files.wordpress.com/2011/06/011511_portlandia_episode_1_t.jpg?quality=80&w=300',
       episodes: 30
     },
     {
       name: 'Nance',
       image: 'https://www.thewrap.com/wp-content/uploads/2018/01/Carrie-Brownstein-2-Nance.jpg',
       episodes: 30
     },
     {
       name: 'Dave',
       image: 'https://video-images.vice.com/_uncategorized/1516378269176-Portlandia_S4_101_3.jpeg',
       episodes: 17
     },
     {
       name: 'Kath',
       image: 'https://video-images.vice.com/_uncategorized/1516378269176-Portlandia_S4_101_3.jpeg',
       episodes: 17
     },
     {
       name: 'Nina',
       image: 'http://media.oregonlive.com/ent_impact_tvfilm/photo/fred-armisen-portlandia-nina-ifcjpg-4c7a606a57b332ed.jpg',
       episodes: 15
     },
     {
       name: 'Lance',
       image: 'https://i.pinimg.com/originals/f2/2a/0c/f22a0c8ddb51032d94ea908a346819aa.jpg',
       episodes: 15
     }
   ]

  router.create(newCharacters, (err, character) => {
  if (err) { console.log(err) }
  console.log('SEED: NEW Characters CREATED!')
  res.redirect('/portlandia/character')
})
})

module.exports = router;

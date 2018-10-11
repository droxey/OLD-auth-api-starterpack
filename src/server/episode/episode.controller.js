const express = require('express');

const router = express.Router();

const Episode = require('./episode.model.js');

// const User = require('../auth/auth.controller.js');
// index;
router.get('/', (req, res) => {
  // const currentUser = req.user;
  // if (currentUser === null) {
  //   res.redirect('/portlandia/user/login');
  // }
  Episode.find({})
        .then(episode => {
          res.status(200).json({ episode, message: 'Get all episodes' });
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
  res.status(200).render('episodes/new.hbs');
});

//  create

router.post('/', (req, res) => {
  const episode = new Episode(req.body);
  episode.save();
  res.status(200).json({
    episode,
    message: 'You have submitted a new episode'
  });
});


// show
router.get('/:id', (req, res) => {
  const currentUser = req.user;
  // if (currentUser === null) {
  //   res.redirect('/portlandia/user/login');
  // }
  Episode.findById(req.params.id).then(episode => {
    res.status(200)
            .json({
              episode,
              message: 'Here is the episode that you selected'
            })
            .catch(err => {
              console.log(err.message);
            });
  });
});

//  Edit
router.get('/:id/edit', (req, res) => {
  Episode.findById(req.params.id, (err, episode) => {
    res.render('episodes/edit.hbs', { episode });
  });
});

router.put('/:id', (req, res) => {
  const currentUser = req.user;
  // if (currentUser === null) {
  //   res.redirect('/portlandia/user/login');
  // }
  Episode.findByIdAndUpdate(req.params.id, req.body, (err, episode) => {
    res.status(200).redirect('/');
  }).catch(err => {
      console.log(err.message);
    });
});
//  delete
router.delete('/:id', (req, res) => {
  // const currentUser = req.user;
  // if (currentUser === null) {
  //   res.redirect('/portlandia/user/login');
  // }
  Episode.findByIdAndRemove(req.params.id, (err, episode) => {
    res.status(200).json('Episode deleted');
  }).catch(err => {
    console.log(err.message);
  });
});


// seed

router.get('/seed/episode', (req, res) => {
    const newEpisodes = [
      {
        title: 'Farm',
        summary: 'Carrie and Fred visit a farm.',
        image: 'https://www.agri-pulse.com/ext/resources/images/Agriculture-photos/Farmscapes/Farm1.jpg?1509734744',
        number: 1,
        season: 1


      },
      {
        title: 'A Song for Portland',
        summary: 'The mayor wants an anthem for Portland.',
        image: 'https://laughingsquid.com/wp-content/uploads/2014/08/portlandia-the-dream-of-the-1890.jpg',
        number: 2,
        season: 1
      },
      {
        title: 'Aimme',
        summary: 'Someone loves Aimee',
        image: 'https://img.huffingtonpost.com/asset/5bad5d9b250000cf00377e28.jpeg?ops=scalefit_720_noupscale',
        number: 3,
        season: 1
      },
      {
        title: 'Mayor ',
        image: 'https://www.indiewire.com/wp-content/uploads/2016/02/portlandia-kyle-maclachlan.jpg?w=780',
        summary: 'Carrie and Fred must find the mayor',
        number: 4,
        season: 1
      },
      {
        title: 'Blunderbuss',
        image: 'https://images.amcnetworks.com/ifc.com/wp-content/uploads/2010/12/PORTLANDIA-105_STILL2-800x450.jpg',
        summary: 'Um ...Portland stuff',
        number: 5,
        season: 1
      },
      {
        title: 'Baseball',
        image: 'https://images.amcnetworks.com/ifc.com/wp-content/uploads/2010/12/PORTLANDIA-106_STILL2-800x450.jpg',
        summary: 'Everyone loves baseball',
        number: 6,
        season: 1
      },
      {
        title: 'Mixologist',
        image: 'https://i.pinimg.com/originals/ae/e2/4c/aee24c3a1a5aa56ced174546cca96124.jpg',
        summary: 'Wine is good',
        number: 1,
        season: 2
      },
      {
        title: 'One Moore Episode',
        image: 'https://images.amcnetworks.com/ifc.com/wp-content/uploads/2017/11/OneMooreEpisode-MPX.jpg',
        summary: 'Need more Portlandia',
        number: 2,
        season: 2
      }
    ]

    router.create(newEpisodes, (err, episode) => {
    if (err) { console.log(err) }
    console.log('SEED: NEW Episode CREATED!')
    res.redirect('/portlandia/episode')
  })
  })

// const episodeSeed = require('../models/seed.js')
// products.get('/seed/newproducts/viaseedfile', (req, res) => {
//   Product.insertMany(productSeeds, (err, products) => {
//     if (err) { console.log(err) } else {
//       res.send(products)
//     }
//   })
// })
module.exports = router;

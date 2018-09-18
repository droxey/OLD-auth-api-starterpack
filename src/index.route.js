const express = require('express');
const thingRoutes = require('./server/thing/thing.route');
const authRoutes = require('./server/auth/auth.route');

const router = express.Router(); // eslint-disable-line new-cap

// #TODO: Change to your model.
router.use('/things', thingRoutes);

router.use('/auth', authRoutes);

module.exports = router;

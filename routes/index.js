const router = require('express').Router();
const apiRoutes = require('./api');

//establishes the /api routes
router.use('/api', apiRoutes);

//Any other route will get an error message
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
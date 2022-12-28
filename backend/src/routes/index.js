const { Router } = require('express');
const usRoutes = require('./userRoutes');
const mvRoutes = require('./moviesRoutes');

const router = Router();

router.use(usRoutes);
router.use(mvRoutes);

module.exports = router;
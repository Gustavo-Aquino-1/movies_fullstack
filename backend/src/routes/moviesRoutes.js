const { Router } = require('express');
const mvController = require('../controllers/moviesController');
const mvMiddlewares = require('../middlewares/moviesMiddlewares');

const router = Router();

router.get('/movie/:id', mvController.getById);

router.get('/movie', mvController.getALl);

router.post('/movie', mvMiddlewares.verifyBodyFieldsPost, mvMiddlewares.verifyDetailsPost, mvController.create);

router.put('/movie/:id', mvMiddlewares.verifyBodyFieldsPut, mvMiddlewares.verifyDetailsPut, mvController.update);

router.delete('/movie/:id', mvController.remove);

module.exports = router;

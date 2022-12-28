const { Router } = require('express');
const usController = require('../controllers/userController');
const usMiddlewares = require('../middlewares/userMiddlewares');

const router = Router();

router.get('/user/:id', usController.getById);

router.get('/user', usController.getALl);

router.post('/user', usMiddlewares.verifyBodyFields, usController.create);

router.put('/user/:id', usMiddlewares.verifyBodyFields, usController.update);

router.delete('/user/:id', usController.remove);

module.exports = router;

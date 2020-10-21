const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller')

router.get('/maravilhosas', controller.getMaravilhosas)

router.post('/maravilhosas', controller.addMaravilhosa)

router.get('/maravilhosas/:id', controller.getMaravilhosaById)

router.put('/maravilhosas/:id', controller.updateMaravilhosa)

router.delete('/maravilhosas/:id', controller.deleteMaravilhosa)

module.exports = router;
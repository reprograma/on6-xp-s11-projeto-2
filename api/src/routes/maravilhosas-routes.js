const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller')

router.get('/maravilhosas', controller.getMaravilhosas)

router.post('/maravilhosas', controller.addMaravilhosa)

router.get('/maravilhosas/:id', controller.getMaravilhosaById)

//put /maravilhosas/id

//delete /maravilhosas/id

module.exports = router;
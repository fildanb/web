
const express = require('express');
const router = express.Router();
let bookController = require('../controllers/books')

router.get('/', bookController.findAll);
router.post('/', bookController.create);

router.get('/:id', bookController.findById);
router.put('/:id', bookController.updateById);
router.delete('/:id', bookController.deleteById);




module.exports = router;
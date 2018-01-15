
const express = require('express');
const router = express.Router();
let articleController = require('../controllers/articles')

router.get('/', articleController.findAll);
router.post('/', articleController.create);

router.get('/:id', articleController.findById);
router.put('/:id', articleController.updateById);
router.delete('/:id', articleController.deleteById);




module.exports = router;

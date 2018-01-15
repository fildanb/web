
const express = require('express');
const router = express.Router();
let websiteController = require('../controllers/websites')

router.get('/', websiteController.findAll);
router.post('/', websiteController.create);

router.get('/:id', websiteController.findById);
router.put('/:id', websiteController.updateById);
router.delete('/:id', websiteController.deleteById);




module.exports = router;

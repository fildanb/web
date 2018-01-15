let express = require('express')
let router = express.Router();
let defaultController =require('../controllers/default')

router.get('/', (req, res) => {
  res.status(200).send('Main Page');
});

router.get('/create', defaultController.recreateTables);


router.use('/books',require('./book'));
router.use('/articles',require('./article'));
router.use('/websites',require('./website'));




router.get('*', function(req, res){
  res.status(404).send('Nothing here');
});
module.exports = router;
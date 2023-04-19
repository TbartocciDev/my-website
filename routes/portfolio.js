var express = require('express');
var router = express.Router();
portfolioCtrl = require('../controllers/portfolio')

router.get('/', portfolioCtrl.index)
router.get('/this-website', portfolioCtrl.showThisWebsite)

module.exports = router;

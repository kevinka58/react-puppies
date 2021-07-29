const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../../controllers/api/puppies');

router.get('/', puppiesCtrl.index);
router.get('/:id', puppiesCtrl.show);
router.post('/', puppiesCtrl.create);

module.exports = router;

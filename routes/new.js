const express = require("express");
const router = express.Router();

const controller = require('../controller/newController');

router.get('/', controller.render);
router.post('/', controller.post); 

module.exports = router;
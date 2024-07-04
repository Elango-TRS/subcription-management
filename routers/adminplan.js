const express = require('express');
const router = express.Router();
const adminonly=require('../auth/adminonly')
const addpla = require('../controllers/Addplanconcroller'); // Import the correct controller

// Ensure the 'addplan' method exists on the imported controller
router.post('/add/plans',adminonly,(addpla.addplan)); 

module.exports = router;

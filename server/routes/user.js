const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    createUser,
} = require('../controllers/User')

router.route('/').get(getAllUsers);
router.route('/add').post(createUser)

module.exports = router
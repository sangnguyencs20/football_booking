const User = require('../models/User');
const getAllUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

module.exports = {
    getAllUsers, createUser,
};
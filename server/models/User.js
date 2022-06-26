const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        trim: true
    },
    phone_number: {
        type: 'string',
        $regex: '^[0-9]{10}',
    },
    role: {
        enum: ['admin', 'user', 'owner'],
    },
    dob:{
        type: 'date',
    },
});
module.exports = mongoose.model('User', UserSchema);
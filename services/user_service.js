const User = require('../database/models/User');

const getAll = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await User.find();
            resolve(users);
        } catch (e) {
            reject(new Error('Error getting users'));
        }
    });
}

module.exports = {
    getAll
}

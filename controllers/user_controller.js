const userService = require('../services/user_service');
const {error, success} = require("node-http-response-wrapper");


const list = async (req, res) => {
    const users = await userService.getAll();
    return success(res, 'Users list', users.map(u => u.mapToResponse()));
}

module.exports = {
    list
}


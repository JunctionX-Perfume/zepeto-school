require('dotenv').config();

let jwtObj = {};
jwtObj.secret = process.env.secret;

module.exports = jwtObj;

const express = require('express');
const route = express.Router();

const usercontroller = require('./../controllers/user');

route.post('/register',usercontroller.register);
route.get('/getAllUser',usercontroller.getAllUser);
route.get('/getToken',usercontroller.getToken);
route.post('/SendNotif',usercontroller.SendNotif);

module.exports = route;
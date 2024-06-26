const { signup, login } = require('../controller/authController');

const router = require('express').Router();


// A router gives a controller an address
// controller will do all the business logic
router.route('/signup')
    .post(signup);

router.route('/login')
    .post(login);

     

module.exports = router;
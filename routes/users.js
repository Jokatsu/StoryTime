const router = require('express').Router();
const { login, signup, cookieCheck, logout } = require('../controllers/users');

router.get('/cookieCheck', cookieCheck);
router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);


module.exports = router;

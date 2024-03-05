const router = require("express").Router();
const { register } = require('../components/userComponent')
router.post('/register', register)
module.exports = router
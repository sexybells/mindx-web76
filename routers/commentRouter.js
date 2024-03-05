const router = require("express").Router();
const { create, edit } = require('../components/commentComponent')
router.post('/create', create)
router.post('/edit', edit)
module.exports = router
const router = require("express").Router();

const userRoute = require('./userRouter')
const commentRoute = require('./commentRouter')
const postRoute = require('./postRouter')
router.use('/users', userRoute)
router.use('/comments', commentRoute)
router.use('/posts', postRoute)
 module.exports = router
const router = require("express").Router();
const {create, edit, get3Comments, getCommentByPostId, getPostAndComments} = require('../components/postComponent')
router.post('/create', create);
router.post('/edit/:id', edit);
router.get('/comments', get3Comments);
router.get('/comments/:postId', getCommentByPostId);
router.get('/comments/list', getPostAndComments);
module.exports = router
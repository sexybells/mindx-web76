const { users, posts, comments } = require("../db");
const yup = require("yup");
const uuid = require("uuid");

const postValidate = yup.object().shape({
  content: yup.string().required("Vui lòng nhập nội dung"),
  authorId: yup.string().required("Vui lòng nhập authorId"),
});

const create = async (req, res) => {
  try {
    const data = req.body;
    await postValidate.validate(data);
    const user = checkUserExist(data.authorId);
    if (user) {
      const post = {
        id: `PS${uuid.v4()}`,
        ...data,
      };
      return res.status(201).json({ post, msg: "Tạo mới thành công" });
    }
    return res.status(203).json({ msg: "User không tồn tại" });
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

const edit = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    await postValidate.validate(data);
    const post = checkPostExist(id, data.authorId);
    if (post) {
      post.content = data.content;
      return res.status(201).json({ post, msg: "Tạo mới thành công" });
    }
    return res
      .status(203)
      .json({ msg: "Người dùng hoặc bài viết không tồn tại" });
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

const getCommentByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    const postComments = comments.filter(
      (comment) => comment.postId === postId
    );
    return res.json(postComments);
  } catch (er) {
    return res.json({ err: er });
  }
};

const getPostAndComments = async (req, res) => {
  try {
    const list = posts.map((post) => {
      const listComment = comments.filter(
        (comment) => comment.postId === post.id
      );
      return { post, comments: listComment };
    });
    return res.json(list);
  } catch (err) {
    return res.json({ err });
  }
};

const get3Comments = async (req, res) => {
    console.log(1);
  try {
    const list = posts.map((post) => {
      const postWithComments = { ...post, comments: [] };
      const postComments = comments.filter(
        (comment) => comment.postId === post.id
      );
      for (let i = 0; i < 3 && i < postComments.length; i++) {
        postWithComments.comments.push(postComments[i]);
      }
      console.log(postWithComments)
      return postWithComments;
    });

    return res.json(list);
  } catch (err) {
    return res.json({ err: err });
  }
};

const checkUserExist = (id) => {
  return users.find((user) => user.id === id);
};

const checkPostExist = (id, authorId) => {
  return posts.find((post) => post.id === id && post.authorId === authorId);
};

module.exports = {
  create,
  edit,
  getCommentByPostId,
  getPostAndComments,
  get3Comments,
};

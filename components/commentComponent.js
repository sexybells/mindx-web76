const { users, posts, comments } = require("../db");
const yup = require("yup");
const uuid = require("uuid");

const commentValidate = yup.object().shape({
  postId: yup.string().required("Id post là bắt buộc"),
  content: yup.string().required("Nội dung bình luận là bắt buộc"),
  authorId: yup.string().required("authorId là bắt buộc"),
});

const create = async (req, res) => {
  const data = req.body;

  try {
    await commentValidate.validate(data);
    const postExists = posts.some((post) => post.id === data.postId);
    const userExists = users.some((user) => user.id === data.authorId);

    if (!postExists) {
      return res.status(404).json({ error: "Bài post không tồn tại." });
    }
    if (!userExists) {
      return res.status(404).json({ error: "Người dùng không tồn tại." });
    }
    const newComment = {
      id: `CMT${uuid.v4()}`,
      ...data,
    };
    comments.push(newComment);

    return res.status(201).json(newComment);
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await commentValidate.validate(data);
    const commentExist = comments.findIndex((comment) => comment.id === id);
    if (commentExist === -1) {
      return res.status(404).json({ error: "Bình luận không tồn tại." });
    }
    const existingComment = data.comments[commentExist];
    if (existingComment.authorId !== data.authorId) {
      return res
        .status(403)
        .json({ error: "Bạn không có quyền chỉnh sửa bình luận này." });
    }

    existingComment.content = data.content;
    return res.status(200).json(existingComment);
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};

module.exports = { create, edit };

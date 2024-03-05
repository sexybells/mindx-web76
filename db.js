const users = [
  {
    id: "US001",
    userName: "MindX",
  },
  {
    id: "US002",
    useName: "Nobi Nobita",
  },
  {
    id: "US003",
    useName: "Nobi Nobita",
  },
  {
    id: "US004",
    useName: "Nobi Nobita",
  },
];
const posts = [
  {
    id: "PS001",
    content: "Nội dung học về JSON Server!",
    authorId: "US001",
  },
  {
    id: "PS002",
    content: "Nội dung học về JSON Server!",
    authorId: "US002",
  },
  {
    id: "PS003",
    content: "Nội dung học về JSON Server!",
    authorId: "US003",
  },
  {
    id: "PS004",
    content: "Nội dung học về JSON Server!",
    authorId: "US004",
  },
];
const comments = [
  {
    id: "CMT001",
    postId: "PS001",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US001",
  },
  {
    id: "CMT002",
    postId: "PS001",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US001",
  },
  {
    id: "CMT003",
    postId: "PS001",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US001",
  },
  {
    id: "CMT004",
    postId: "PS002",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US002",
  },
  {
    id: "CMT005",
    postId: "PS002",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US002",
  },
  {
    id: "CMT006",
    postId: "PS002",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US002",
  },
  {
    id: "CMT007",
    postId: "PS003",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US003",
  },
  {
    id: "CMT008",
    postId: "PS003",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US003",
  },
  {
    id: "CMT009",
    postId: "PS003",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US003",
  },
  {
    id: "CMT010",
    postId: "PS004",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US004",
  },
  {
    id: "CMT011",
    postId: "PS004",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US004",
  },
  {
    id: "CMT012",
    postId: "PS004",
    content: "Bài học này rất ý nghĩa! Cảm ơn MindX!",
    authorId: "US004",
  },
];

module.exports = {users, posts, comments}

const express = require('express');
const app = express();
const uuid = require('uuid');
app.use(express.json());
const {users, post, posts} = require('./data')

app.listen(3000, () => {
    console.log('Server is running!');
});
//1
app.get('/users', (req,res) => {
    return res.json(users);
});

//2
app.post('/users', (req,res) => {
    const {email, userName, avatar, age} = req.body;
    if (users.some(user => user.email === email)) {
        return res.status(422).json({error: 'Email đã tồn tại'})
    }
    const newUser = {
        id: uuid.v4(),
        email,
        age,
        avatar,
        userName
    }

    users.push(newUser);
    return res.status(201).json(newUser);
});

//3
app.get('/posts', (req, res) => {
    const {userId} = req.params;
    const post = posts.some(post => post.userId === userId);
    return res.status(200).json(post);
})
//4
app.post('/posts', (req, res) => {
    const {content, userId} = req.body;

    const newPost = {
        userId,
        content,
        isPublic: true,
        postId: uuid.v4(),
        createdAt: Date.now()
    }

    posts.push(newPost);
    return res.status(201).json(newPost);
});

//5
app.post('/edit-post', (req, res) => {
    const {content, postId, userId} = req.body;
    const post = posts.find(post => post.postId === postId && post.userId === userId);
    if (post) {
       post.content = content;
       return res.status(200).json({ message: 'Cập nhật bài viết thành công' });
    }
    return res.status(404).json({ error: 'Bài viết không tồn tại hoặc user id không trùng khớp' });
})

//6
app.post('/delete-post', (req, res) => {
    const {postId, userId} = req.body;
    const index = posts.findIndex(post => post.postId === postId && post.userId === userId);
    if (index !== -1) {
        posts.splice(index, 1);
        return res.status(200).json({ message: 'Xoá bài viết thành công.' });
      }
    return res.status(404).json({ error: 'Bài viết không tồn tại hoặc user id không trùng khớp' });
})

//7

app.get('/find-post', (req, res) => {
    const { content } = req.query;
    if (!content) {
      return res.status(400).json({ error: 'Vui lòng cung cấp nội dung để tìm kiếm.' });
    }
    const filter = posts.filter(post => post.content.includes(content));
  
    return res.status(200).json(filter);
});

//8
app.get('/find-post-public', (req, res) => {
    const filter = posts.filter(post => post.isPublic === true);
  
    return res.status(200).json(filter);
});
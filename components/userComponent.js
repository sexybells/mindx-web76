const {users} = require('../db');
const yup = require('yup');
const uuid = require('uuid');

const userValidate = yup.object().shape({
    userName: yup.string().required('Vui lòng nhập tên của bạn')
})

const register = async (req, res) => {
    try {
        const data = req.body;
        await userValidate.validate(data);
        const user = {
            id: `US${uuid.v4()}`,
            ...data
        }
        users.push(user);
        console.log(user);
        return res.status(201).json({user, msg: "Tạo mới thành công. "});
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

module.exports = {register}
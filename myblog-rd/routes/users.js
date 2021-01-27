const router = require('koa-router')()
const {createToken } = require('../auth');
const contrller=require('../controller/userController')
router.prefix('/user');
//前缀 如果不加 就要写user/login
// let secretKey='**my_secret_key$$'
// let secretKey='**my_secret_key$$'
//key越复杂越好 相当于一种加密的算法

router.post('/login', contrller.login);
router.post('/regist',contrller.regist);
router.get('/wirteUser', contrller.writeUser);
module.exports = router

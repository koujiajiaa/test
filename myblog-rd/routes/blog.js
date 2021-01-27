const router = require('koa-router')();
router.prefix('/blog');
const { verifyToken } = require('../auth');
const controller = require('../controller/blogController')

//可以有很多的中间件   


router.get('/list',controller.getBlogList );
router.get('/detail', controller.getBlogById);

router.post('/goarticle', controller.postBlog)
router.post('/addComm', controller.addComm)
module.exports = router

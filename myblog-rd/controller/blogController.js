const blogModel = require('../model/blogModel')

module.exports = {
  
  postBlog: async function (ctx, next) {
    let { title, content, userId } = ctx.request.body;
    let results = await blogModel.saveBlog(title, content, userId);
    if (results.insertId > 0) {
      ctx.body = {
        state: 'success'
      }
    } else {
      ctx.body = {
        state: 'fail'
      }
    }
  },
  //获取文章内容
  async getBlogList(ctx, next) {
    let results = await blogModel.getBlogs();
    ctx.body = {
      state: 'success',
      blogs: results
    }
  },
  //获取详细内容
  async getBlogById(ctx) {
    let { blogId } = ctx.query;
    console.log(blogId)
    let results = await blogModel.getBlogById(blogId);
    console.log(results)
    if (results.length > 0) {
      let { blog_id, title, content, post_time } = results[0];
      let blogInfo = {
        blog_id,
        title,
        content,
        post_time,
      };
      blogInfo.comments = [];
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        blogInfo.comments.push({
          comm_id: obj.comm_id,
          comm_content: obj.comm_content,
          comm_post_time: obj.comm_post_time,
          username: obj.username
        });
        console.log(blogInfo)
        ctx.body = {
          state: 'success',
          blog: blogInfo
        }
      }
    } else {
      ctx.body = {
        state: 'fail'
      }
    }
  },

  //添加评论
  addComm(ctx, next) {
    let { commenttext, blogId } = ctx.request.body;
    if (inpVal) {
      blogModel.saveComm(commenttext, blogId);
      ctx.body = {
        state: 'success',
      }
    }
  },
}
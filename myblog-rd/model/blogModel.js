
const db = require("../model/db");

module.exports = {
    saveBlog(title, content, user_id) {
        return db.query('insert into t_blog set ?', {
            title,
            content,
            user_id
        },
        )
    },
    getBlogs(){
        return db.query('select * from t_blog ')
    },
    getBlogById(blogId){
        return db.query(`
        SELECT blog.*, comm.comm_id, comm.content as comm_content, comm.post_time as comm_post_time, usr.username
        FROM t_blog blog  LEFT JOIN t_comment comm 
        ON comm.blog_id=blog.blog_id 
        LEFT JOIN t_user usr ON comm.user_id=usr.user_id
        WHERE blog.blog_id=?`, [blogId]);
    },  
      saveComm(commenttext, blogId) {
        return db.query("insert into t_comment set content=?,blog_id=?", [commenttext, blogId]);

    },
 

}
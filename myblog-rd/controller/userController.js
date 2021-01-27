const userModule = require('../model/userModle')
const { createToken } = require('../auth')

module.exports = {
    login: async function (ctx, next) {
        //1.接收数据
        let { username, password } = ctx.request.body;
        let results = await userModule.getNamePass(username, password);
        //根据数据库的操作，返回信息给页面
        console.log(results)
        if (results.length > 0) {
            let payload = {
                username,
                userId: Math.random(),
            };
            var token = createToken(payload);
            ctx.body = {
                state: 'success',
                token,
                //查到数据库里面唯一的对象
                user: results[0]
            }
        } else {
            ctx.body = {
                state: 'fail'
            }
        };
    },
    regist: async function (ctx, next) {
        //1.接收数据
        let { username, password, nickname } = ctx.request.body;
        //3.连接数据库
        let results = await userModule.saveUser({ username, password, nickname });
        //4.根据数据库的操作，返回信息给页面
        console.log(results)
        if (results.insertId) {
            ctx.body = {
                state: 'success',
            }
        } else {
            ctx.body = {
                state: 'fail'
            }
        };
    },
     writeUser:async function (ctx) {
        let { commenttext } = ctx.query;
        let results = await userModule.getUserByUsername(commenttext);
        console.log(results);
        if (results.length > 0) {
            ctx.body = {
                state: 'fail'
            }
        } else {
            ctx.body = {
                state: 'success'
            }
        }
    }
}
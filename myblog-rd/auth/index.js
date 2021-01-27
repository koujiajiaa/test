let jwt = require('jsonwebtoken')
let secretKey='**my_secret_key$$'

module.exports = {
    //生成token签名
    createToken: (payload) => {
        //带单引号的是毫秒
        return jwt.sign(payload, secretKey, {expiresIn: '2h'});
        
    },
    verifyToken: async (ctx, next) => {
        if (ctx.header.authorization) {
            let parts = ctx.header.authorization.split(" ");
            let bearer=parts[0];
            let token=parts[1];
            //正则表达式
            if(/^Bearer$/.test(bearer)){
                try {
                    jwt.verify(token, '**my_secret_key$$');
                    //如果成功继续执行下一步
                    await next();
                    //验证失败 
                } catch (err) {
                    //如果失败 显示以下
                    ctx.status = 401;
                    ctx.body = {
                        state: 'auth-fail'
                    };
                }
            }
            }
            
    }
}
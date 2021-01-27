const db = require('../model/db')

module.exports = {
    getNamePass(username, password) {
        return db.query('select * from t_user where username=? and password=?',[username, password])
    },
    saveUser(user){
        return db.query("insert into t_user set ?", user);
    },
    getUserByUsername(username){
        return db.query("SELECT * FROM t_user where username=?",[username]);
    }

}
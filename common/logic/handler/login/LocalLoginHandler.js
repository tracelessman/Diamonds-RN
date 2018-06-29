import User from "../../../store/User"
import Login from "../../bean/Login"
class LocalLoginHandler extends LoginHandler{
    needLogin(){
        return true;
    }
    userExits(){
       return User.userExits();
    }
    getLogin(){
        return ths.login;
    }
    login(id,name,pass,callback){
        //TODO check pass md5
        this.login = new Login(id,name);
        callback(this.login);
    }
}
module.exports = LocalLoginHandler;

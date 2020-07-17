import {observable, action} from 'mobx'

class userStore {
    @observable user = JSON.parse(sessionStorage.getItem('user')) || {};
    @observable isLogin = sessionStorage.getItem('isLogin') || false;

    @action
    login(user) {
        this.user = user;
        this.isLogin = true;
        sessionStorage.setItem('isLogin', 'true');
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    loginOut() {
        this.user = "";
        this.isLogin = false;
        sessionStorage.removeItem('isLogin');
        sessionStorage.removeItem('user');
    }


}


export default userStore

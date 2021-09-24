import {makeObservable, observable, action} from 'mobx'


//get username from localStorage
let username = localStorage.getItem('username')
export const store = makeObservable(
    {
        //init username if username is in localStorage then pass the value to init, so that value won't lost if refresh the page
        username: username || '',
        saveUserInfo(value:string){
            this.username = value
        }, 
    },
    {
        username: observable,
        saveUserInfo: action,
    }
)
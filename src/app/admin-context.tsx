import { createContext } from "react";

export class AdminState {
    isAdmin: boolean;
    setState: Function;
    setCookie: Function;
    removeCookie: Function;
    
    constructor(isAdmin: boolean, setState: Function, setCookie: Function, removeCookie: Function){
        this.isAdmin = isAdmin;
        this.setState = setState;
        this.setCookie = setCookie;
        this.removeCookie = removeCookie;
    }

    adminSignIn(email: String, password: String) : boolean {
        if(!email || !password) return false

        if (email.length === 0 || password.length === 0) return false

        if (email === 'damasya.du.admin@gmail.com' && password === 'dUfR@123') {
            this.setCookie('isAdmin', true);
            this.setState(true);
            return true
        }

        return false;
    }

    adminSignOut() {
        this.removeCookie('isAdmin');
        this.setState(false);
    }
}

const AdminContext = createContext<AdminState>(
    new AdminState(false, ()=>{}, ()=>{}, ()=>{})
);

export default AdminContext;

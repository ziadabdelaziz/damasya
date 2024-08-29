import { createContext } from "react";
import { auth } from '../firebase/fire';
import { signInWithEmailAndPassword } from "firebase/auth";

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

    async adminSignIn(email: string, password: string) : Promise<boolean> {
        if(!email || !password) return false
        
        if (email.length === 0 || password.length === 0) return false
        
        try{
            await signInWithEmailAndPassword(auth, email, password)
            
            this.setCookie('isAdmin', true);
            this.setState(true);
            return true;
        }
        catch {
            this.removeCookie();
            this.setState(false);
            alert('Error: Invalid email or password');
            return false;
        };
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

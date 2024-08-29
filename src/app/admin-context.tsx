import { createContext } from "react";

export interface AdminState {
    isAdmin: boolean,
    adminSignIn(email: String, passowrd: String): boolean,
    adminSignOut(): void,
}

const AdminContext = createContext<AdminState>({
    isAdmin: false,
    adminSignIn: () => false,
    adminSignOut: () => {}
});

export default AdminContext;

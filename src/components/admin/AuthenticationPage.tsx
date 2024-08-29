import { useRef, useContext} from "react";
import AdminContext, { AdminState }  from '../../app/admin-context.tsx';
import { useNavigate } from "react-router-dom";

const AuthenticationPage = () => {
    const adminContext = useContext<AdminState>(AdminContext);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const formAuth = (event: React.FormEvent) => {
        event.preventDefault();

        const isAdmin: boolean = adminContext.adminSignIn(
            emailRef.current!.value,
            passwordRef.current!.value,
        )

        if (isAdmin) navigate("/");
    }

    return (
        <div className="w-full h-screen">
            <form onSubmit={formAuth} 
                className="relative block top-1/4 m-auto w-4/5 md:w-3/5 lg:w-2/5">
                <div className="bg-app-secondary/90 px-8 py-10 sm:p-16 lg:mx-5 rounded-lg">
                    <h1 className="text-center mx-auto mb-3 text-2xl text-app-primary">Admin</h1>
                    <label htmlFor="email" className="text-app-primary">Email</label>
                    <input ref={emailRef} required type="email" id="email" className="block w-full rounded-md bg-gray-100 h-10 px-2 focus:border-app-secondary focus:border-2 outline-none"/>
                    <br />
                    <label htmlFor="password" className="text-app-primary">Password</label>
                    <input ref={passwordRef} required type="password" className="block w-full rounded-md bg-gray-100 h-10 px-2 focus:border-app-secondary focus:border-2 outline-none" />
                    <br />
                    <button className="block mx-auto py-1 px-4 rounded-lg bg-app-action text-app-primary">Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default AuthenticationPage;
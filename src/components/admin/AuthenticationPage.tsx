import { useRef, useContext, useState} from "react";
import AdminContext, { AdminState }  from '../../app/context/admin-context.tsx';
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from 'react-loader-spinner'

const AuthenticationPage = () => {
    enum FormState {
        Init,
        Loading,
        Valid,
        Invalid,
    }

    const adminContext = useContext<AdminState>(AdminContext);
    const [formState, setFormState] = useState<FormState>(FormState.Init);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const formAuth = async (event: React.FormEvent) => {
        event.preventDefault();
        
        setFormState(FormState.Loading)
        console.log('sent');
        const isValid = await adminContext.adminSignIn(
            emailRef.current!.value,
            passwordRef.current!.value,
        )
        console.log('received: '+isValid);
        if (isValid) {
            console.log('should navigate');
            setFormState(FormState.Valid);
            navigate("/");
        } else {
            console.log('won\'t navigate');
            setFormState(FormState.Invalid);
            alert('Error: Invalid email or password');
        }
    }

    return (
        <div className="w-full h-screen">
            {formState == FormState.Loading
              ? <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3"><span><InfinitySpin color="#711D1B" /></span></div>
              : <form onSubmit={formAuth}
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
            }
        </div>
    );
}

export default AuthenticationPage;
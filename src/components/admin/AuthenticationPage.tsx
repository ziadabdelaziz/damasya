const AuthenticationPage = () => {
    return (
        <div className="w-full h-screen">
            <form className="relative block top-1/4 m-auto w-4/5 md:w-3/5 lg:w-2/5">
                <div className="bg-app-secondary/90 p-5 rounded-lg">
                <h1 className="text-center mx-auto mb-3 text-2xl text-app-primary">Admin</h1>
                    <label className="text-app-primary" htmlFor="email">Email</label>
                    <input className="block w-full rounded-md bg-gray-100 h-10 px-2 focus:border-app-secondary focus:border-2 outline-none" type="email" id="email"/>
                    <br />
                    <label className="text-app-primary" htmlFor="password">Password</label>
                    <input className="block w-full rounded-md bg-gray-100 h-10 px-2 focus:border-app-secondary focus:border-2 outline-none" type="password" />
                    <button className="block mx-auto mt-6 py-1 px-4 rounded-lg bg-app-action text-app-primary">Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default AuthenticationPage;
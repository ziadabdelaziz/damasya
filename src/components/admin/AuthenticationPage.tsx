const AuthenticationPage = () => {
    return (
        <div className="grid place-items-center h-screen">
            <form className="bg-app-secondary/50 w-2/3 md:w-3/5 lg:w-2/5 p-10 rounded-lg">
                <h1 className="pb-10">Admin</h1>
                <label htmlFor="email">Email</label>
                <input className="block w-full rounded-md bg-gray-100 h-10 px-2 focus:border-app-secondary focus:border-2 outline-none" type="email" id="email"/>
                <br />
                <label htmlFor="password">Password</label>
                <input className="block w-full rounded-md bg-gray-100 h-10 px-2 focus:border-app-secondary focus:border-2 outline-none" type="password" />
            </form>
        </div>
    );
}

export default AuthenticationPage;
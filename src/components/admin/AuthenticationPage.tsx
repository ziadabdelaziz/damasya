const AuthenticationPage = () => {
    return (
        <div>
            <form>
                <h1 className="p-20">Admin</h1>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" />
            </form>
        </div>
    );
}

export default AuthenticationPage;
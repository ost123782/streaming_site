export default function LoginPage () {
    return (
        <>
            <h1>Login page</h1>
            <form className="flex flex-col">
                <label htmlFor="login">login</label>
                <input className="border-blue-800 border-2" name="login" type="text"/>
                <label htmlFor="password">password</label>
                <input name="password" type="password"/>
                <button type="submit">Log in</button>
                <p>Haven’t created account yet? <span className="text-blue-700">Create it!</span></p>
            </form>
        </>
    )
}

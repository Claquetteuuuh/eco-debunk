import '../../assets/scss/Login/signIn.scss';

export const SignIn = (): JSX.Element => {
    console.log('test')
    return (
        <div className={"Sign-In"}>
            <div className={"sign-in-content"}>
                <span>Welcome !</span>
                <div className={"Sign-In-Up"}>
                    <span>Sign in</span>
                    <span>Sign up</span>
                </div>
                <form className={"info"}>
                    <div>
                        <span>Pseudo</span>
                        <input type={"text"} placeholder={"Username"}/>
                    </div>
                    <div>
                        <span>Mot de passe</span>
                        <input type={"password"} placeholder={"Password"}/>
                    </div>
                    <div>
                        <input type={"checkbox"}/>
                        <span>Rester connecté</span>
                    </div>
                    <div>
                        <input type={"submit"} value={"Se connecter"}/>
                    </div>
                </form>

            </div>
        </div>
    )
}
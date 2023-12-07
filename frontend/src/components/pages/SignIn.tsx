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
                    <div className="input-group">
                        <input required type="text" name="pseudo" autoComplete="off" className="input"/>
                        <label className="user-label">Pseudo</label>
                    </div>
                    <div className="input-group">
                        <input required type="text" name="password" autoComplete="off" className="input"/>
                        <label className="password-label">Mot de passe</label>
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
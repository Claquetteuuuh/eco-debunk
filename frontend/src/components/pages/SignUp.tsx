import '../../assets/scss/Login/commum.scss';

export const SignUp = (): JSX.Element => {
    return (
        <div className={"Sign-Up"}>
            <div className={"sign-up-content"}>
                <span>Welcome !</span>
                <div className={"Sign-In-Up"}>
                    <a href={"/sign-in"}><span>Sign in</span></a>
                    <a href={"/sign-up"} className={"sign-active"}><span>Sign up</span></a>
                </div>
                <form className={"info"}>
                    <div className="input-group">
                        <input required type="text" name="pseudo" autoComplete="off" className="input" onChange={(e) => { setPseudo(e.currentTarget.value)}}/>
                        <label className="user-label">Email</label>
                    </div>
                    <div className="input-group">
                        <input required type="text" name="pseudo-name" autoComplete="off" className="input"/>
                        <label className="username-label">Pseudo</label>
                    </div>
                    <div className="input-group">
                        <input required type="password" name="password" autoComplete="off" className="input"/>
                        <label className="pass-label">Mot de passe</label>
                    </div>
                    <div className="input-group">
                        <input required type="password" name="password-confirm" autoComplete="off" className="input"/>
                        <label className="pass-conf-label">Confirmer le mot de passe</label>
                    </div>
                    <div className={"stay-connect"}>
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
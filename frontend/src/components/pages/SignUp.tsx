import { NavLink } from 'react-router-dom';
import '../../assets/scss/Login/commum.scss';
import * as jose from "jose";
import axios from "axios";
import { useState } from 'react';

export const SignUp = (): JSX.Element => {

    const [password, setPassword] = useState<string>("");

    const [pseudo, setPseudo] = useState<string>("");

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            email: pseudo,
            password: password
        }
        const encryptedBody = await new jose.SignJWT({body: payload}).setExpirationTime("1h").setProtectedHeader({alg: "HS256"}).sign(new TextEncoder().encode(import.meta.env.VITE_BACKEND_KEY));

        const response = await axios.post("/api/auth/login", {info: encryptedBody});
        console.log(response);
    }

    return (
        <div className={"Sign-Up"}>
            <div className={"sign-up-content"}>
                <span>Welcome !</span>
                <div className={"Sign-In-Up"}>
                    <NavLink to={"/sign-in"}><span>Sign in</span></NavLink>
                    <NavLink to={"/sign-up"} className={"sign-active"}><span>Sign up</span></NavLink>
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
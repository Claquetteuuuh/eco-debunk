import { useState } from 'react';
import * as jose from 'jose';
import '../../assets/scss/Login/commum.scss';
import axios from "axios";
import {NavLink} from "react-router-dom";

export const SignIn = (): JSX.Element => {
    const [password, setPassword] = useState<string>("");

    const [pseudo, setPseudo] = useState<string>("");

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            email: pseudo,
            password: password
        }
        const encryptedBody = await new jose.SignJWT({body: payload}).setExpirationTime("1h").setProtectedHeader({alg: "HS256"}).sign(new TextEncoder().encode(import.meta.env.VITE_BACKEND_KEY));

        const response = await axios.post(`${import.meta.env.VITE_API_LINK}/api/auth/login`, {info: encryptedBody});
        console.log(response);
    }

    return (
        <div className={"Sign-In"}>
            <div className={"sign-in-content"}>
                <span>Welcome !</span>
                <div className={"Sign-In-Up"}>
                    <NavLink to={'/sign-up'} className={"sign-active"}><span>Sign in</span></NavLink>
                    <NavLink to={"/sign-up"}><span>Sign up</span></NavLink>
                </div>
                <form onSubmit={(e) => handleForm(e)} className={"info"}>
                    <div className="input-group">
                        <input required type="email" name="pseudo" autoComplete="off" className="input" onChange={(e) => { setPseudo(e.currentTarget.value)}}/>
                        <label className="user-label">Email</label>
                    </div>
                    <div className="input-group">
                        <input required type="password" minLength={ 3 } maxLength={ 30 } name="password" autoComplete="off" className="input" onChange={ (e) => {
                            setPassword(e.currentTarget.value);
                        } }/>
                        <label className="pass-label">Mot de passe</label>
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
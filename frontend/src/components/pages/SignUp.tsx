import { NavLink } from 'react-router-dom';
import '../../assets/scss/Login/commum.scss';
import * as jose from "jose";
import axios from "axios";
import { useContext, useState } from 'react';
import { ToastManager } from '../../objects/ToastManager';
import { toastContext } from '../../contexts/toastContext';
import { ToastType } from '../../interface/toastInterface';

export const SignUp = (): JSX.Element => {

    const [password, setPassword] = useState<string>("");

    const [pseudo, setPseudo] = useState<string>("");

    const HandleToasts: ToastManager = useContext(toastContext);

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        HandleToasts.push({
            type: ToastType.Success,
            message: "Vous êtes bien inscrit !"
        });

        throw new Error("Not implemented");
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
                <form className={"info"} onSubmit={ handleForm }>
                    <div className="input-group">
                        <input required type="email" name="pseudo" autoComplete="off" className="input" onChange={(e) => { setPseudo(e.currentTarget.value)}}/>
                        <label className="user-label">Email</label>
                    </div>
                    <div className="input-group">
                        <input required type="text" name="pseudo-name" maxLength={ 30 }  autoComplete="off" className="input"/>
                        <label className="username-label">Pseudo</label>
                    </div>
                    <div className="input-group">
                        <input required type="password" name="password" autoComplete="off" className="input" minLength={ 3 } maxLength={ 30 } />
                        <label className="pass-label">Mot de passe</label>
                    </div>
                    <div className="input-group">
                        <input required type="password" name="password-confirm" autoComplete="off" minLength={ 3 } maxLength={ 30 } className="input"/>
                        <label className="pass-conf-label">Confirmer le mot de passe</label>
                    </div>
                    <div className={"stay-connect"}>
                        <input type={"checkbox"} id='stayConnected'/>
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
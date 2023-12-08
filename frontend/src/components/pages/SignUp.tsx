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
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const HandleToasts: ToastManager = useContext(toastContext);

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (confirmedPassword === password) {
            const payload = {
                email: email,
                password: password,
                username: username
            }
    
            const encryptedBody = await new jose.SignJWT({body: payload}).setExpirationTime("1h").setProtectedHeader({alg: "HS256"}).sign(new TextEncoder().encode(import.meta.env.VITE_BACKEND_KEY));
    
            axios.post(`${import.meta.env.VITE_API_LINK}/api/auth/signup`, {info: encryptedBody})
            .then((_) => {
                HandleToasts.push({
                    message: "Votre compte a bien été créé !",
                    type: ToastType.Success
                });
            })
            .catch((err) => {
                HandleToasts.push({
                    message: err.response.data.error,
                    type: ToastType.Error,
                });
            })
        } else {
            HandleToasts.push({
                message: "Les mots de passes ne correspondent pas !",
                type: ToastType.Error,
            });
        }
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
                        <input required type="email" name="Usernsame" autoComplete="off" className="input" onChange={(e) => { setEmail(e.currentTarget.value)}}/>
                        <label className="user-label">Email</label>
                    </div>
                    <div className="input-group">
                        <input required type="text" name="Username" maxLength={ 30 } onChange={(e) => { setUsername(e.currentTarget.value)}} autoComplete="off" className="input"/>
                        <label className="username-label">Username</label>
                    </div>
                    <div className="input-group">
                        <input required type="password" name="password" autoComplete="off" className="input" minLength={ 3 } maxLength={ 30 } onChange={(e) => { setPassword(e.currentTarget.value)}} />
                        <label className="pass-label">Mot de passe</label>
                    </div>
                    <div className="input-group">
                        <input required type="password" name="password-confirm" autoComplete="off" minLength={ 3 } maxLength={ 30 } className="input" onChange={ (e) => { setConfirmedPassword(e.currentTarget.value)} } />
                        <label className="pass-conf-label">Confirmer le mot de passe</label>
                    </div>
                    <div className={"stay-connect"}>
                        <input type={"checkbox"} id='stayConnected'/>
                        <span>Rester connecté</span>
                    </div>
                    <div>
                        <input type={"submit"} value={"S'inscrire"}/>
                    </div>
                </form>

            </div>
        </div>
    )
}
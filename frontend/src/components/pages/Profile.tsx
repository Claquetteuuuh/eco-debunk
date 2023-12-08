import '../../assets/scss/Profile.scss';
import React from "react";

//const UserProfile = (props) => {
// Accéder à l'ID de l'utilisateur depuis les paramètres de l'URL
// const userId = props.match.params.userId;
export const Profile = (): JSX.Element => {
    return (
        <div className={"Profile"}>
            <div className={"profile-content"}>
                <div className={"profile-info"}>
                    <div className={"profile-picture"}>
                        <img src={"https://cdn.discordapp.com/attachments/831959972717373460/872167691331375390/unknown.png"} alt={"profile"} />
                    </div>
                    <div className={"profile-name"}>
                        <span>Username</span>
                    </div>
                    <div className={"profile-score"}>
                        <img src={"https://cdn.discordapp.com/attachments/831959972717373460/872167691331375390/unknown.png"} alt={"profile"} />
                        <span>Score total défi</span>
                    </div>

                    <div className={"profile-posts"}>

                    </div>
                </div>
            </div>
        </div>
    );
}
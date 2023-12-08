import '../assets/scss/messageItem.scss';
import upvote from '../assets/img/upvote.png';
import downvote from '../assets/img/downvote.png';

export const MessageItem = (): JSX.Element => {
    return (
        <div className={"component-content"}>
            <span>pseudo</span>
            <div className={"message-content"}>
                <span>Titre</span>
                <span>Bon bah moi par exemple j'ai pisser dans ma bouteille à pisse. Ca permet de réduire la consommation d'eau donc plus écologique et en plus économique ;).</span>
            </div>
            <div className={"vote"}>
                <div className={"upvote"}><img src={upvote} alt={"upvote"}/><span>21</span></div>
                <div className={"downvote"}><img src={downvote} alt={"downvote"}/><span>12</span></div>
            </div>
            <div className={"profile-picture"}></div>
        </div>
    );
}
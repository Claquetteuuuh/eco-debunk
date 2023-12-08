import {MessageItem} from "../MessageItem.tsx";
import '../../assets/scss/forum.scss'

export const Forum = (): JSX.Element => {
    return (
        <div className={"forum-content"}>
            <div className={"add-post"}>
                <form className={"add-post-content"}>
                    <div className="input-group">
                        <input required type="text" name="titre" autoComplete="off" className="input"/>
                        <label className="title-label">Titre</label>
                    </div>
                    <div className="input-group">
                        <input required type="text" name="content" autoComplete="off" className="input"/>
                        <label className="content-label">Contenu</label>
                    </div>
                    <div className={"add-post-button"}>
                        <div className={"add-image"}>
                            <input type="file" name="content" autoComplete="off" content={"Ajouter une image"}/>
                        </div>
                        <input type={"submit"} value={"Poster"}/>
                    </div>
                </form>
            </div>
            <div className={"show-post"}>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
            </div>
        </div>
    );
}
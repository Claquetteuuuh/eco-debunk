import {MessageItem} from "../MessageItem.tsx";
import '../../assets/scss/forum.scss'

export const Forum = (): JSX.Element => {
    return (
        <div className={"forum-content"}>
            <MessageItem/>
            <MessageItem/>
        </div>
    );
}
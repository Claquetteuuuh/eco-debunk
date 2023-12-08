import '../assets/scss/messageItem.scss'

export const MessageItem = (): JSX.Element => {
    return (
        <div className={"component-content"}>
            <div className={"title"}>
                <span>TITRE</span>
            </div>
            <div className={"message-content"}>
                <span>Bon bah moi par exemple j'ai pisser dans ma bouteille à pisse. Ca permet de réduire la consommation d'eau donc plus écologique et en plus économique ;).</span>
            </div>
        </div>
    );
}
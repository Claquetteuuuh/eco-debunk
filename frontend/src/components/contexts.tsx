import { ToastContextProvider } from "../contexts/toastContext";
import { ChildrenInterface } from "../interface/childrenInterface";

export const Contexts = (props: ChildrenInterface) => {
    return (
        <ToastContextProvider>
            { props.children }
        </ToastContextProvider>
    );
}
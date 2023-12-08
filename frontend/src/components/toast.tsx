import { useEffect, useRef } from "react";
import { ToastInterface } from "../interface/toastInterface";

export const Toast = (props: ToastInterface) => {

    const toast = useRef<HTMLDivElement>(null);

    useEffect(() => {

        setTimeout(() => {
            if (toast.current) {
                toast.current.classList.add("show");
            }
        }, 1);

        setTimeout(() => {
            if (toast.current) {
                toast.current.classList.remove("show");
                setTimeout(() => {
                    if (toast.current) {
                        toast.current.remove();
                    }
                }, 200);
            }
        }, props.duration || 3000);

    }, []);


    return (
        <div className={ `toast ${ props.type }` } ref={ toast }>
            <div className="toast-message">
                { props.message }
            </div>
        </div>
    );
}
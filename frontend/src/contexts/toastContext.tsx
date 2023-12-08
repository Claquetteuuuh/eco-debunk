import { createContext, useState } from "react";
import { ToastManager } from "../objects/ToastManager";
import { ToastInterface } from "../interface/toastInterface";
import { ChildrenInterface } from "../interface/childrenInterface";
import { Toast } from "../components/toast";

import '../assets/scss/toast.scss';

const toastManager = new ToastManager();
export const toastContext = createContext<ToastManager>(toastManager);

export const ToastContextProvider = (props: ChildrenInterface) => {
    toastManager.initState(useState<ToastInterface[]>([]));
    return (
        <toastContext.Provider value={ toastManager }>
            <div className="toasts-container">
                { toastManager.get().map((toast: ToastInterface, index: number) => (
                    <Toast key={ index } { ...toast } />
                )) }
            </div>
            { props.children }
        </toastContext.Provider>
    );
}
import { ToastInterface } from "../interface/toastInterface";

export class ToastManager {
    #getter : ToastInterface[];
    #setter : React.Dispatch<React.SetStateAction<ToastInterface[]>>;

    constructor() {
        this.#getter = [];
        this.#setter = () => {};
    }

    initState(state: [ToastInterface[], React.Dispatch<React.SetStateAction<ToastInterface[]>>]) {
        this.#getter = state[0];
        this.#setter = state[1];
    }

    push(toast: ToastInterface) {
        this.#setter([...this.#getter, toast]);
    }

    pop() {
        this.#setter(this.#getter.slice(1));
    }

    clear() {
        this.#setter([]);
    }

    get() {
        return this.#getter;
    }
}
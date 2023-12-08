export enum ToastType {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info'
}

export interface ToastInterface {
    message: string;
    type: ToastType;
    duration?: number;
}
import type {FC} from 'react';

interface ToastProps {
	show: boolean;
	message: string;
}

export const Toast: FC<ToastProps> = ({show, message}) => {
	return <div className={`toast ${show ? 'show' : ''}`}>{message}</div>;
};

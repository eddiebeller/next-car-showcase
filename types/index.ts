import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export interface ButtonProps {
	title: string;
	containerStyles?: string;
	disabled: boolean;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

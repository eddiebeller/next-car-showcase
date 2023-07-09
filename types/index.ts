import { MouseEventHandler } from 'react';

export interface ButtonProps {
	title: string;
	containerStyles?: string;
	disabled?: boolean;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	buttonType?: 'button' | 'submit';
}

export interface ManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer) => void;
}

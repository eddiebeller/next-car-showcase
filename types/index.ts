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
	setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
	city_mpg: number | undefined;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string | undefined;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string | undefined;
	year: number;
	image: string;
}

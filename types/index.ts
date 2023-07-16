import { MouseEventHandler } from 'react';

export interface ButtonProps {
	title: string;
	containerStyles?: string;
	titleStyles?: string;
	isDisabled?: boolean;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	buttonType?: 'button' | 'submit';
	icon?: string;
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

export interface FilterProps {
	manufacturer: string;
	fuel: string;
	limit: number;
	year: number;
	model: string;
}

export interface OptionsProps {
	title: string;
	value: string;
}

export interface ShowMoreProps {
	pageNumber: number;
	isNext: boolean;
}

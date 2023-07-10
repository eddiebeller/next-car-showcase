'use client';
import React from 'react';
import Image from 'next/image';
import { ButtonProps } from '@/types';

export const Button = ({
	containerStyles,
	titleStyles,
	isDisabled,
	handleClick,
	buttonType,
	icon,
	title,
}: ButtonProps) => (
	<button
		className={`custom-btn ${containerStyles}`}
		disabled={isDisabled}
		type={buttonType}
		onClick={handleClick}
	>
		<span className={`flex-1 ${titleStyles}`}>{title}</span>
		{icon && (
			<div className='relative w-6 h-6'>
				<Image src={icon} fill alt='icon' className='object-contain' />
			</div>
		)}
	</button>
);

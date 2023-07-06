'use client';
import React from 'react';
import Image from 'next/image';
import { ButtonProps } from '@/types';

export const Button = ({
	containerStyles,
	title,
	disabled,
	handleClick,
	buttonType,
}: ButtonProps) => (
	<button
		className={`custom-btn ${containerStyles}`}
		disabled={disabled}
		type={buttonType}
		onClick={handleClick}
	>
		<span className='flex-1'>{title}</span>
	</button>
);

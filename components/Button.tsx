'use client';
import React from 'react';
import Image from 'next/image';
import { ButtonProps } from '@/types';

export const Button = ({
	containerStyles,
	title,
	disabled,
	handleClick,
}: ButtonProps) => (
	<button
		className={`custom-btn ${containerStyles}`}
		disabled={disabled}
		type={'button'}
		onClick={handleClick}
	>
		<span className='flex-1'>{title}</span>
	</button>
);

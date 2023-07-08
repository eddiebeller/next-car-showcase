'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import heroImage from '../public/hero.png';

export const Hero = () => {
	const handleClick = () => {
		console.log('hello');
	};
	return (
		<section className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>
					Find, book or rent a car. Quickly and easily.
				</h1>
				<p className='hero__subtitle'>
					Streamline your car rental experience with our effortless booking
					process.
				</p>
				<Button
					containerStyles='bg-primary-blue text-white rounded-full mt-10'
					disabled={false}
					title='Explore Cars'
					handleClick={handleClick}
				/>
			</div>
			<div className='hero__image-container'>
				<div className='hero__image'>
					<Image src={heroImage} alt='hero' fill className='object-contain' />
				</div>
				<div className='hero__image-overlay'></div>
			</div>
		</section>
	);
};

'use client';
import { CarProps } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './Button';
import { CarDetailsModal } from './CarDetailsModal';

interface CarCardProps {
	car: CarProps;
}

export const CarCard = ({ car }: CarCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const { city_mpg, year, make, model, transmission, drive, image } = car;

	const SettingsIcon = ({ transmission, drive, city_mpg, image }) => {
		return (
			<div className='flex flex-col justify-center items-center gap-2'>
				<Image
					src={`/${image}.svg`}
					width={20}
					height={20}
					alt='steering wheel'
				/>
				{transmission && (
					<p className='text-[14px]'>
						{transmission === 'a' ? 'Autimatic' : 'Manual'}
					</p>
				)}
				{drive && <p className='text-[14px]'>{drive.toUpperCase()}</p>}
				{city_mpg && <p className='text-[14px]'>{city_mpg} MPG</p>}
			</div>
		);
	};
	return (
		<div className='car-card group'>
			<div className='car-card__content'>
				<h2 className='car-card__content-title'>
					{make} {model}
				</h2>
			</div>

			<p className='flex mt-6 text-[20px] font-extrabold'>
				<span className='self-start text-[14px] font-semibold'>$</span>
				50
				<span className='self-end text-[14px] font-medium'>/day</span>
			</p>

			<div className='relative w-full h-40 my-3 object-contain'>
				<Image
					src='/hero.png'
					className='object-contain'
					alt='car model'
					fill
					priority
				/>
			</div>
			<div className='relative flex w-full mt-2'>
				<div className='flex group-hover:invisible w-full justify-between text-gray'>
					<SettingsIcon
						transmission={transmission}
						image='steering-wheel'
						drive={undefined}
						city_mpg={undefined}
					/>
					<SettingsIcon
						drive={drive}
						image='tire'
						transmission={undefined}
						city_mpg={undefined}
					/>
					<SettingsIcon
						city_mpg={city_mpg}
						image='gas'
						transmission={undefined}
						drive={undefined}
					/>
				</div>
				<div className='car-card__btn-container'>
					<Button
						title='View more..'
						containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
						icon='/right-arrow.svg'
						titleStyles='text-white text-[14px] leading-[17px] font-bold'
						handleClick={() => setIsOpen(true)}
					/>
				</div>
			</div>
      <CarDetailsModal isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
		</div>
	);
};

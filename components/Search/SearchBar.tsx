'use client';
import React, { useState } from 'react';
import { SearchManufacturer } from './SearchItems/SearchManufacturer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SeachBarButton = ({ classname }: { classname: string }) => {
	return (
		<button type='submit' className={`ml-3 z-10 ${classname}`}>
			<Image
				src='/magnifying-glass.svg'
				alt='search'
				width={40}
				height={20}
				className='object-contain'
			/>
		</button>
	);
};

export const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('');
	const [model, setModel] = useState('');
	const router = useRouter();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (manufacturer === '' && model === '') return;

		updateSearchParams(model, manufacturer);
	};

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (model) {
			searchParams.set('model', model);
		} else {
			searchParams.delete('model');
		}
		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer);
		} else {
			searchParams.delete('manufacturer');
		}

		const pathName = `${window.location.pathname}?${searchParams.toString()}`;

		router.push(pathName);
	};

	return (
		<form className='searchbar' onSubmit={handleSubmit}>
			<div className='searchbar__item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
			<div className='searchbar__item'>
				<Image
					src='/model-icon.png'
					width={25}
					height={25}
					className='absolute w-[20px] h-[20px] ml-4'
					alt='car model'
				/>
				<input
					type='text'
					name='model'
					value={model}
					onChange={(e) => setModel(e.target.value)}
					placeholder='Tiguan...'
					className='searchbar__input'
				/>
			</div>
			<SeachBarButton classname='' />
		</form>
	);
};

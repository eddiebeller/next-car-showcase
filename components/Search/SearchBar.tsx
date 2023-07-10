"use client";
import React, { useState } from 'react';
import { SearchManufacturer } from './SearchItems/SearchManufacturer';

export const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('')
	const handleSubmit = () => {};
	return (
		<form className='searchbar' onSubmit={handleSubmit}>
			<div className='searchbar__item'>
				<SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
			</div>
		</form>
	);
};

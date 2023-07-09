import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { manufacturers } from '@/constants';
import { ManufacturerProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';

export const SearchManufacturer = ({
	manufacturer,
	setManufacturer,
}: ManufacturerProps) => {
	const [query, setQuery] = useState('');
	const filteredManufacturers =
		query === ''
			? manufacturers
			: manufacturers.filter((item) => {
					return item.toLowerCase().includes(query.toLowerCase().trim());
			  });

	return (
		<div className='search-manufacturer'>
			<Combobox>
				<div className='relative w-full'>
					<Combobox.Button className='absolute top-[14px]'>
						<Image
							src='./car-logo.svg'
							width={20}
							height={20}
							className='ml-4'
							alt='manufacturer logo'
						/>
					</Combobox.Button>
					<Combobox.Input
						className='search-manufacturer__input'
						placeholder='VW'
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					/>

					<Transition
						as={Fragment}
						leave='transition ease-in-100 duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setQuery('')}
						// show={false}
					>
						<Combobox.Options>
							{filteredManufacturers.map((item) => (
								<Combobox.Option
									value={item}
									key={item}
									className={({ active }) =>
										`relative search-manufacturer__option ${
											active ? 'bg-primary-blue text-white' : 'text-gray-900'
										}`
									}
								>
									{item}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

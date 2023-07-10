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
					return item.toLowerCase().includes(query.toLowerCase());
			  });

	return (
		<div className='search-manufacturer'>
			<Combobox value={manufacturer} onChange={setManufacturer}>
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
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setQuery('')}
					>
						<Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
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
									{({ selected, active }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}
											>
												{item}
											</span>
											{selected ? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
														active ? 'text-white' : 'text-teal-600'
													}`}
												></span>
											) : null}
										</>
									)}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

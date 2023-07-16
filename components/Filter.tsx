'use client';
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { updateSearchParams } from '@/utils';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { OptionsProps } from '@/types';

interface FilterProps {
	title: string;
	options: OptionsProps[];
}

export const Filter = ({ title, options }: FilterProps) => {
	const router = useRouter();
	const [selected, setSelected] = useState(options[0]);

	const handleUpdateParams = (event: { title: string; value: string }) => {
		const newPathName = updateSearchParams(title, event.value.toLowerCase());
		router.push(newPathName);
	};
	return (
		<div className='w-fit'>
			<Listbox
				value={selected}
				onChange={(event) => {
					setSelected(event);
					handleUpdateParams(event);
				}}
			>
				<div className='relative w-fit z-1'>
					<Listbox.Button className='custom-filter__btn'>
						<span className='block truncate'>{selected.title}</span>
						<Image
							src='/chevron-up-down.svg'
							width={20}
							height={20}
							className='ml-4 object-contain'
							alt='chevron up and down'
						/>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Listbox.Options className='custom-filter__options'>
							{options.map((option, optionIndex) => (
								<Listbox.Option
									key={optionIndex}
									className={({ active }) =>
										`relative cursor-default select-none py-2 px-4 ${
											active ? 'bg-primary-blue text-white' : 'text-gray-900'
										}`
									}
									value={option}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}
											>
												{option.title}
											</span>
											{selected ? (
												<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
													{/* <CheckIcon className='h-5 w-5' aria-hidden='true' /> */}
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

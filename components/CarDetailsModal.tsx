import { CarProps } from '@/types';
import { generateCarImageUrl } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react';

interface CarDetailsModalProps {
	car: CarProps;
	isOpen: boolean;
	closeModal: () => void;
}
export const CarDetailsModal = ({
	isOpen,
	closeModal,
	car,
}: CarDetailsModalProps) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={closeModal}>
					// Overlay
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>
					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-4 text-left shadow-xl transition-all flex flex-col gap-5'>
									<button
										type='button'
										className='absolute top-2 right-2 z-10 w-fit p-1 bg-primary-blue-100 rounded-full'
										onClick={closeModal}
									>
										<Image
											src='/close.svg'
											width={15}
											height={15}
											alt='close'
											className='object-contain'
										/>
									</button>
									<div className='flex-1 flex flex-col gap-3 mb-5'>
										<div className='relative w-full h-28 bg-pattern bg-cover bg-center rounded-lg'>
											<div className='relative w-full h-28 my-0 object-contain'>
												<Image
													src={generateCarImageUrl(car)}
													className='object-contain'
													alt='car model'
													fill
													priority
												/>
											</div>
										</div>
										<div className='flex gap-3'>
											<div className='flex-1 relative w-full h-20 bg-primary-blue-100 rounded-lg'>
												<div className='relative w-full h-20 my-3 object-contain'>
													<Image
														src={generateCarImageUrl(car, '29')}
														className='object-contain'
														alt='car model'
														fill
														priority
													/>
												</div>
											</div>
											<div className='flex-1 relative w-full h-20 bg-primary-blue-100 rounded-lg'>
												<div className='relative w-full h-20 my-3 object-contain'>
													<Image
														src={generateCarImageUrl(car, '33')}
														className='object-contain'
														alt='car model'
														fill
														priority
													/>
												</div>
											</div>
											<div className='flex-1 relative w-full h-20 bg-primary-blue-100 rounded-lg'>
												<div className='relative w-full h-20 my-3 object-contain'>
													<Image
														src={generateCarImageUrl(car, '13')}
														className='object-contain'
														alt='car model'
														fill
														priority
													/>
												</div>
											</div>
										</div>
									</div>
									<Dialog.Title
										as='h2'
										className='font-semibold text-xl capitalize'
									>
										{car.make} {car.model}
									</Dialog.Title>
									<div className='flex flex-wrap gap-2'>
										{Object.entries(car).map(([key, value]) => (
											<div
												className='flex justify-between gap-5 w-full text-right'
												key={key}
											>
												<h4 className='text-gray capitalize'>
													{key.split('_').join(' ')}
												</h4>
												<p className='text-black-100 font-semibold'>{value}</p>
											</div>
										))}
									</div>

									<div className='mt-4'></div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

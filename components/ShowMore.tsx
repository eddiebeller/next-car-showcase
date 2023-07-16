'use client';
import React from 'react';
import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { Button } from './Button';
import { updateSearchParams } from '@/utils';

export const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
	const router = useRouter();

	const handleShowMore = () => {
		const newLimit = (pageNumber + 1) * 10;
		const newPageLimit = updateSearchParams('limit', `${newLimit}`);
		router.push(newPageLimit);
	};
	return (
		<div className='w-full flex-center mt-10'>
			{!isNext && (
				<Button
					title='Show More..'
					buttonType='button'
					containerStyles='bg-primary-blue rounded-full text-white'
					handleClick={handleShowMore}
				/>
			)}
		</div>
	);
};

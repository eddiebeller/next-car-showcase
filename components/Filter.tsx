import React from 'react';

interface FilterProps {
	type: string;
}

export const Filter = ({ type }) => {
	return (
		<label htmlFor=''>
			<input type='text' />
		</label>
	);
};

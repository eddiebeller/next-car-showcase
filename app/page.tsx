'use client';

import { CarCard } from '@/components/CarCard';
import { Filter } from '@/components/Filter';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/Search/SearchBar';
import { ShowMore } from '@/components/ShowMore';
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils';
import { useEffect, useState } from 'react';

export default function Home() {
	const [allCars, setAllCars] = useState([]);
	const [loading, setLoading] = useState(false);

	// search states
	const [manufacturer, setManufacturer] = useState('');
	const [model, setModel] = useState('');

	// filter
	const [fuel, setFuel] = useState('');
	const [year, setYear] = useState(2022);
	const [limit, setLimit] = useState(10);

	async function getCars() {
		setLoading(true);
		try {
			const result = await fetchCars({
				manufacturer: manufacturer || '',
				year: year || 2022,
				fuel: fuel || '',
				limit: limit || 10,
				model: model || '',
			});
			setAllCars(result);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		getCars();
	}, [manufacturer, model, fuel, year, limit]);

	console.log(allCars);


	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<main className='overflow-hidden'>
			<Hero />
			<div className='mt-14 padding-x padding-y max-width' id='discover'>
				<div className='home__text-container'>
					<h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
					<p className=''>Explore the cars might you like.</p>
				</div>
				<div className='home__filters'>
					<SearchBar />
					<div className='home__filter-container'>
						<Filter title='fuel' options={fuels} />
						<Filter title='year' options={yearsOfProduction} />
					</div>
				</div>

				{isDataEmpty ? (
					<div>
						<h2 className='text-black text-xl font-bold'>
							No cars data loaded...
						</h2>
						<p>{allCars?.message}</p>
					</div>
				) : (
					<section>
						<div className='home__cars-wrapper'>
							{allCars?.map((car) => (
								<CarCard car={car} />
							))}
						</div>
						<ShowMore pageNumber={pageNumber} isNext={isNext} />
					</section>
				)}
			</div>
		</main>
	);
}

import { CarCard } from '@/components/CarCard';
import { Filter } from '@/components/Filter';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/Search/SearchBar';
import { fetchCars } from '@/utils';
import Image from 'next/image';

export default async function Home({ searchParams }) {
	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || '',
		year: searchParams.year || 2023,
		fuel: searchParams.fuel || '',
		limit: searchParams.limit || 10,
		model: searchParams.model || '',
	});

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
						<Filter type='fuel' />
						<Filter type='year' />
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
					</section>
				)}
			</div>
		</main>
	);
}

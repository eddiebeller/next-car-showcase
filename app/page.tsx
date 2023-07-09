import { Filter } from '@/components/Filter';
import { Hero } from '@/components/Hero';
import { Search } from '@/components/Search/Search';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='overflow-hidden'>
			<Hero />
			<div className='mt-14 padding-x padding-y max-width' id='discover'>
				<div className='home__text-container'>
					<h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
					<p className=''>Explore the cars might you like.</p>
				</div>
				<div className='home__filters'>
					<Search />
					<div className='home__filter-container'>
						<Filter type='fuel' />
						<Filter type='year' />
					</div>
				</div>
			</div>
		</main>
	);
}

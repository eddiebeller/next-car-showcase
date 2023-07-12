import { CarProps } from '@/types';

export async function fetchAllCars() {
	console.log(process.env.API_KEY);
	const headers = {
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};
	const response = await fetch(
		`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=mercedes`,
		{
			headers: headers,
		}
	);
	const data = await response.json();
	return data;
}
export function generateCarImageUrl(car: CarProps, angle?: string) {
	const url = new URL('https://cdn.imagin.studio/getimage');
	const { make, model, year } = car;

	url.searchParams.append(
		'customer',
		process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
	);
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	url.searchParams.append('zoomLevel', 'fullscreen');
	url.searchParams.append('angle', `${angle}`);

	return `${url}`;
}

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

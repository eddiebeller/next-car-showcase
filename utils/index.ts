export async function fetchAllCars() {
	const headers = {
		'X-RapidAPI-Key': '901dac17afmsh1440451628a2d97p187042jsn5476e002e371',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};
	const response = await fetch(
		`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=civic`,
		{
			headers: headers,
		}
	);
	const data = await response.json();
	return data;
}

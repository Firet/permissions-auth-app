import axios from 'axios';

export default function fetchData(data: any) {
	const url = `https://jsonplaceholder.typicode.com/users`;
	return axios
		.get(url, data)
		.then((response) => console.log(response))
		.then(() => console.info('Hook sent correctly'))
		.catch(() => console.warn('Hook failed'));
}

import axios from 'axios';

export default function post(data: any) {
	const url = `https://jsonplaceholder.typicode.com/posts`;
	return axios
		.post(url, data)
		.then(() => console.info('Hook sent correctly'))
		.catch(() => console.warn('Hook failed'));
}

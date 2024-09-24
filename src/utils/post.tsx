import axios from 'axios';

export default function post(data: any) {
	const url = `https://jsonplaceholder.typicode.com/posts`;
	// const fakeData = {
	// 	method: 'POST',
	// 	body: JSON.stringify({
	// 		title: 'foo',
	// 		body: 'bar',
	// 		userId: 1,
	// 	}),
	// 	headers: {
	// 		'Content-type': 'application/json; charset=UTF-8',
	// 	},
	// };
	return axios
		.post(url, data)
		.then(() => console.info('Hook sent correctly'))
		.catch(() => console.warn('Hook failed'));
}

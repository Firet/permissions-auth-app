import axios from 'axios';

export default function fetchData(data: any) {
	const url = `https://jsonplaceholder.typicode.com/users`;
	// const fakeData = {
	// 	method: 'GET',
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
		.get(url, data)
		.then((response) => console.log(response))
		.then(() => console.info('Hook sent correctly'))
		.catch(() => console.warn('Hook failed'));
}

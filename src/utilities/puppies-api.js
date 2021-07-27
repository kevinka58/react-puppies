import { getToken } from './users-service';

const BASE_URL = '/api/puppies';

export function getAll() {
	return sendRequest(BASE_URL);
}

export function getById(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}


async function sendRequest(url, method = 'GET', payload = null) {
	const options = { method };
	if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	}
	const token = getToken();
	if (token) {
		options.headers = options.headers || {};
		options.headers.Authorization = `Bearer ${token}`;
	}
	const res = await fetch(url, options);
	if (res.ok) return res.json();
	throw new Error('Bad Request');
}

export function create(pup) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: {'content-type': 'application/json'},
		body: JSON.stringify(pup)	
	}).then(res => res.json())
}
export default async function sendRequest(url, method = 'GET', payload) {
	const token = localStorage.getItem('token');
	const options = { method, headers: {} };
  
	if (token) {
	  options.headers.Authorization = `Bearer ${token}`;
	}
  
	const isForm = payload instanceof FormData;
  
	if (payload) {
	  if (!isForm) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(payload);
	  } else {
		options.body = payload;
	  }
	}
  
	const res = await fetch(`http://localhost:8000${url}`, options);
	if (res.ok) return res.json();
	throw new Error('Fetch failed');
  }
  
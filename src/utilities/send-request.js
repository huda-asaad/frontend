// send-request.js

export default async function sendRequest(url, method = "GET", payload = null, token = null) {
    const options = { method, headers: {} };
  
    if (payload) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(payload);
    }
  
    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }
  
    const res = await fetch(url, options);
  
    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }
  
    return res.json();
  }
  
// src/utilities/property-api.js
import sendRequest from "./sendRequest";
const url = "/properties/";


export async function index() {
    return sendRequest(url);
}

export async function show(id) {
    return sendRequest(`${url}${id}/`);
  }
  
  export async function create(formData) {
    return sendRequest(url, "POST", formData);
  }
  

  export async function update(formData, propertyId) {
    return sendRequest(`${url}${propertyId}/`, "PUT", formData);
  }
  
  export async function deleteProperty(propertyId) {
    return sendRequest(`${url}${propertyId}/`, "DELETE");
  }
 
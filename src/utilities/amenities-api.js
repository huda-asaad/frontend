import sendRequest from "./sendRequest";

export function propertyAmenities(propertyId) {
    return sendRequest(`/properties/${propertyId}/amenities/`);
}

export function create(formData, propertyId) {
    return sendRequest(`/properties/${propertyId}/amenities/`, "POST", formData);
}


import { useState } from "react";
import * as amenitiesAPI from "../../utilities/amenities-api";

export default function AmenityForm({ propertyDetail, propertyAmenities, setPropertyAmenities }) {
    const [formData, setFormData] = useState({ name: "" }); 

function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
}

async function handleSubmit(evt) {
    evt.preventDefault();
    try {

        await amenitiesAPI.create(formData, propertyDetail.id);

        const refreshedAmenities = await amenitiesAPI.propertyAmenities(propertyDetail.id);
        setPropertyAmenities(refreshedAmenities);

        setFormData({ name: "" });
    } catch (err) {
        console.log("Error submitting amenity:", err);
    }
}

      

    return (
        <form className="amenity-form-wrapper" onSubmit={handleSubmit}>
            <label className="form-label">Amenity Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Swimming Pool"
                required
                className="form-input"
            />
            <button type="submit" className="form-button">Add Amenity</button>
        </form>
    );
}

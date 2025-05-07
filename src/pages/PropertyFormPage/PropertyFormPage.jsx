import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as propertyAPI from "../../utilities/property-api";
import "./PropertyFormPage.css";

export default function PropertyFormPage({ createProperty, editProperty, deleteProperty }) {
    const initialState = { title: "", type: "", description: "", price: "", size: "", rooms: "", bathrooms: "" };
    const [currProperty, setCurrProperty] = useState(null);
    const [formData, setFormData] = useState(initialState);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getAndSetDetail() {
            try {
                const property = await propertyAPI.show(id);
                setCurrProperty(property);
                setFormData(property);
            } catch (err) {
                console.log(err);
                setCurrProperty(null);
                setFormData(initialState);
            }
        }
        if ((editProperty || deleteProperty) && id) getAndSetDetail();
    }, [id]);

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            console.log("Payload to send:", formData);
            const newProperty = editProperty
                ? await propertyAPI.update(formData, currProperty.id)
                : await propertyAPI.create(formData);
            setFormData(initialState);
            navigate(`/properties/${newProperty.type}`); 
        } catch (err) {
            console.log(err);
        }
    }
    

    async function handleDelete(evt) {
        evt.preventDefault();
        try {
            const response = await propertyAPI.deleteProperty(currProperty.id);
            if (response.success) {
                setFormData(initialState);
                navigate("/properties");
            }
        } catch (err) {
            console.log(err);
        }
    }

    if (deleteProperty && !currProperty) return <h1>Loading...</h1>;

    if (deleteProperty && currProperty) {
        return (
            <section className="property-form-wrapper">
                <div className="property-form-card">
                    <h1>Delete Property?</h1>
                    <h2>Are you sure you want to delete <strong>{currProperty.title}</strong>?</h2>
                    <form onSubmit={handleDelete}>
                        <Link to={`/properties/${currProperty.id}`} className="btn secondary">Cancel</Link>
                        <button type="submit" className="btn danger">Yes - Delete!</button>
                    </form>
                </div>
            </section>
        );
    }

    if (editProperty && !currProperty) return <h1>Loading...</h1>;

    if (createProperty || editProperty) {
        return (
            <section className="property-form-wrapper">
                <div className="property-form-card">
                    <h1>{editProperty ? `✏️ Edit ${currProperty.title}` : "Add a Property"}</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            value={formData.title}
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                            required
                        />
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Select Property Type --</option>
                            <option value="villa">Villa</option>
                            <option value="apartment">Apartment</option>
                        </select>
                        <textarea
                            value={formData.description}
                            name="description"
                            placeholder="Description"
                            onChange={handleChange}
                            required
                        />
                        <input
                            value={formData.price}
                            type="number"
                            name="price"
                            placeholder="Price"
                            onChange={handleChange}
                            required
                        />
                        <input
                            value={formData.size}
                            type="number"
                            name="size"
                            placeholder="Size (m²)"
                            onChange={handleChange}
                            required
                        />
                        <input
                            value={formData.rooms}
                            type="number"
                            name="rooms"
                            placeholder="Rooms"
                            onChange={handleChange}
                            required
                        />
                        <input
                            value={formData.bathrooms}
                            type="number"
                            name="bathrooms"
                            placeholder="Bathrooms"
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn submit">Submit</button>
                    </form>
                </div>
            </section>
        );
    }

    return null;
}

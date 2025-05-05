import "./PropertyDetailPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as propertyAPI from "../../utilities/property-api";
import { propertyAmenities } from "../../utilities/amenities-api";
import AmenityForm from "../../components/Forms/AmenityForm";
import InquiryForm from "../../components/Forms/InquiryForm";

export default function PropertyDetailPage() {
  const [property, setProperty] = useState(null);
  const [amenities, setAmenities] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const propertyData = await propertyAPI.show(id);
        console.log(propertyData)
        
        setProperty(propertyData);
          
        const amenitiesData = await propertyAmenities(id);

        setAmenities(amenitiesData);
      } catch (err) {
        console.error("Failed to fetch property or amenities", err);
        setProperty(null);
      }
    }

    if (id) fetchData();
  }, [id]);

  if (!property) return <h3>Loading property details...</h3>;

  return (
    <section className="detail-property-wrapper">

      <div className="center-action-bar">
        <a href="/properties" className="action-btn back">← Back</a>
        <Link to="/properties/new" className="action-btn add">Add</Link>
        <Link to={`/properties/edit/${property.id}`} className="action-btn warn">Edit</Link>
        <Link to={`/properties/confirm_delete/${property.id}`} className="action-btn danger">Delete</Link>
      </div>

      <div className="detail-property-container">

        <div className="horizontal-section">
          <div className="detail-property-card">
            <img
              src={`http://localhost:8000${property.image}`}
              alt={property.title}
              className="detail-property-img"
            />
            <div className="property-details">
              <h1>{property.title}</h1>
              <h2>{property.type === "villa" ? "Villa" : "Apartment"}</h2>
              <p>{property.description}</p>
              <ul>
                <li><strong>Price:</strong> {property.price} SR</li>
                <li><strong>Size:</strong> {property.size} m²</li>
                <li><strong>Rooms:</strong> {property.rooms}</li>
                <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
              </ul>
            </div>
          </div>

          <div className="amenity-card-box">
            <h3 className="section-title">Add an Amenity</h3>
            <AmenityForm 
              propertyDetail={property} 
              propertyAmenities={amenities} 
              setPropertyAmenities={setAmenities} 
            />

            <h3 className="section-title">Property Amenities</h3>
            {amenities.length > 0 ? (
              <div className="amenities-list">
                {amenities.map((a, idx) => (
                  <div key={idx} className="amenity-card">
                    <span className="amenity-name"> {a.name}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-amenities-msg">This property has no amenities listed yet.</p>
            )}
          </div>
        </div>

        <div className="inquiry-section">
          <InquiryForm propertyId={property.id} />
        </div>
      </div>
    </section>
  );
}

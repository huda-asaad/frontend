// PropertyDetailPage.jsx (بعد التعديل)
import "./PropertyDetailPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as propertyAPI from "../../utilities/property-api";

export default function PropertyDetailPage() {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProperty() {
      try {
        const result = await propertyAPI.show(id);
        setProperty(result);
      } catch (err) {
        console.error("Failed to fetch property", err);
        setProperty(null);
      }
    }
    if (id) fetchProperty();
  }, [id]);

  if (!property) return <h3>Loading property details...</h3>;

  return (
    <section className="detail-property-wrapper">
  <div className="detail-property-container">
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
        <div className="back-button-container">
          <a href="/properties" className="back-button">← Back to Listings</a>
        </div>
      </div>
    </div>

    <div className="property-actions">
      <Link to="/properties/new" className="action-btn add ">Add Property</Link>
      <Link to={`/properties/edit/${property.id}`} className="action-btn warn">Edit</Link>
      <Link to={`/properties/confirm_delete/${property.id}`} className="action-btn danger">Delete</Link>
    </div>
  </div>
</section>

  );
}

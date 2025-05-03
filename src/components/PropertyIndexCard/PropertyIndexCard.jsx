import "./PropertyIndexCard.css";
import { Link } from "react-router-dom";

export default function PropertyIndexCard({ property }) {
    return (
        <div className="property-index-card">
            <div className="property-index-card-content">
                <img src={`http://localhost:8000${property.image}`} alt={property.title} />
                <h2>{property.title}</h2>
                <p>{property.price} SR - {property.size} sqm</p>
                <p>{property.rooms} rooms • {property.bathrooms} bathrooms</p>
                <p><small>{property.description}</small></p>
                <Link to={`/properties/${property.id}`} className="view-details-btn">
                    View Details
                </Link>
            </div>
        </div>
    );
}

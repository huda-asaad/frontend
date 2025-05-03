import "./PropertyIndexPage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import * as propertyAPI from "../../utilities/property-api";
import PropertyIndexCard from "../../components/PropertyIndexCard/PropertyIndexCard.jsx";

export default function PropertyIndexPage() {
  const [allProperties, setAllProperties] = useState([]);
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const typeFilter = queryParams.get("type"); 

  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await propertyAPI.index();
        setAllProperties(data);
      } catch (err) {
        console.error("Error fetching properties", err);
      }
    }

    fetchProperties();
  }, []);

  const filteredProperties = allProperties.filter((property) =>
    !typeFilter ? true : property.type === typeFilter
  );

  return (
    <section className="index-card-container">
      <section className="property-list">
        {filteredProperties.map((property, index) => (
          <PropertyIndexCard key={index} property={property} />
        ))}
      </section>
    </section>
  );
}

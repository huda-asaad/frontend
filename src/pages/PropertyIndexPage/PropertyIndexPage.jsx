import "./PropertyIndexPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as propertyAPI from "../../utilities/property-api";
import PropertyIndexCard from "../../components/PropertyIndexCard/PropertyIndexCard.jsx";

export default function PropertyIndexPage() {
  const [allProperties, setAllProperties] = useState([]);
  const { filter } = useParams(); 
  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await propertyAPI.index();

        const filteredData = filter
          ? data.filter((property) => property.type === filter)
          : data;

        setAllProperties(filteredData);
      } catch (err) {
        console.error("Error fetching properties", err);
      }
    }

    fetchProperties();
  }, [filter]); 

  return (
    <section className="index-card-container">
      <section className="property-list">
        {allProperties.map((property, index) => (
          <PropertyIndexCard key={index} property={property} />
        ))}
      </section>
    </section>
  );
}

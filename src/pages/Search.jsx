import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Alert } from "react-bootstrap";

import Map from "../components/Map";
import FilterBar from "../components/FilterBar";

export default function Search({ apartments }) {

  const [filters, setFilters] = useState({
    pets: false,
    parking: false,
    utilities: false,
    maxPrice: 3000,
    bedrooms: []
  });

  const location = useLocation();

  return (
    <div>
      <h2>Search Apartments</h2>
      <p>Click any pin for additional apartment info!</p>

      {location.state?.added && (
        <Alert variant="success">
          Apartment added successfully!
        </Alert>
      )}

      <Map filters={filters} apartments={apartments} />

      <FilterBar filters={filters} setFilters={setFilters} />
      <br />
    </div>
  );
}
import { useState } from "react";
import Map from "../components/Map";
import FilterBar from "../components/FilterBar";

export default function Search() {

  const [filters, setFilters] = useState({
    pets: false,
    parking: false,
    maxPrice: 2000
  });

  return (
    <div>
      <h2>Search Apartments</h2>
      <p>Click any pin for additional apartment info!</p>

      <FilterBar filters={filters} setFilters={setFilters} />

      <Map filters={filters} />
      <br></br>
    </div>
  );
}
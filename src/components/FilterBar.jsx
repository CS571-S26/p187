import { Form, Row, Col } from "react-bootstrap";

export default function FilterBar({ filters, setFilters }) {

  function handleCheckboxChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked
    });
  }

  function handleSliderChange(e) {
    setFilters({
      ...filters,
      maxPrice: e.target.value
    });
  }

  function handleBedroomChange(e) {
    const value = parseInt(e.target.value);

    let updated = [...filters.bedrooms];

    if (e.target.checked) {
      updated.push(value);
    } else {
      updated = updated.filter((b) => b !== value);
    }

    setFilters({
      ...filters,
      bedrooms: updated
    });
  }

  return (
    <div className="bg-light p-3 mt-3 border rounded">
      <Row className="align-items-start">

        {/* Checkboxes */}
        <Col xs={12} md={4}>
          <Form.Check
            type="checkbox"
            label="Pet Friendly"
            name="pets"
            checked={filters.pets}
            onChange={handleCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="Has Parking"
            name="parking"
            checked={filters.parking}
            onChange={handleCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            label="Utilities Included"
            name="utilities"
            checked={filters.utilities}
            onChange={handleCheckboxChange}
          />
        </Col>

        {/* Price */}
        <Col xs={12} md={4}>
          <Form.Label>Max Price: ${filters.maxPrice}</Form.Label>
          <Form.Range
            min={500}
            max={3000}
            step={100}
            value={filters.maxPrice}
            onChange={handleSliderChange}
          />
        </Col>

        {/* Bedrooms */}
        <Col xs={12} md={4}>
          <Form.Label>Bedrooms</Form.Label>

          {[1, 2, 3, 4, 5].map((num) => (
            <Form.Check
              key={num}
              type="checkbox"
              label={`${num} Bedroom`}
              value={num}
              checked={filters.bedrooms.includes(num)}
              onChange={handleBedroomChange}
            />
          ))}
        </Col>

      </Row>
    </div>
  );
}
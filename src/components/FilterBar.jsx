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

  return (
    <div className="bg-light p-3 mb-3 border rounded">
      <Row className="align-items-center">

        {/* Checkbox filters */}
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
        </Col>

        {/* Price slider */}
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

        {/* Placeholder */}
        <Col xs={12} md={4}>
          <p className="mb-0 text-muted">More filters coming soon...</p>
        </Col>

      </Row>
    </div>
  );
}
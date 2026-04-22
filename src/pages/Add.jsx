import { Form, Button, Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useNavigate } from "react-router-dom";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Add({ addApartment }) {

  const navigate = useNavigate();

  const nameRef = useRef();
  const descRef = useRef();
  const petsRef = useRef();
  const parkingRef = useRef();
  const utilitiesRef = useRef();
  const bedroomRefs = useRef([]);

  const [price, setPrice] = useState(1500);
  const [position, setPosition] = useState(null);

  // Handle map clicks
  function LocationPicker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return position ? <Marker position={position} /> : null;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const name = nameRef.current.value;
    const description = descRef.current.value;
    const parsedPrice = parseInt(price);
    const pets = petsRef.current.checked;
    const parking = parkingRef.current.checked;
    const utilities = utilitiesRef.current.checked;

    const bedrooms = bedroomRefs.current
      .map((ref, i) => (ref.checked ? i + 1 : null))
      .filter((val) => val !== null);

    if (!name || !description || !parsedPrice) {
      alert("Please fill out all required fields!");
      return;
    }

    if (!position) {
      alert("Please select a location on the map!");
      return;
    }

    const newApartment = {
      name,
      description,
      price: parsedPrice,
      pets,
      parking,
      utilities,
      bedrooms,
      position,
    };

    addApartment(newApartment);

    alert("Apartment added!");


    // text inputs
    nameRef.current.value = "";
    descRef.current.value = "";

    // checkboxes
    petsRef.current.checked = false;
    parkingRef.current.checked = false;
    utilitiesRef.current.checked = false;

    // bedrooms checkboxes
    bedroomRefs.current.forEach((ref) => {
      if (ref) ref.checked = false;
    });

    // slider + map
    setPrice(1500);
    setPosition(null);

    navigate("/search", { state: { added: true } });
  }

  return (
    <>
      <h1 className="text-center mb-4">Add an Apartment</h1>

      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={5}>

          <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light">

            {/* Name */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={nameRef}
                placeholder="Enter apartment name"
              />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                ref={descRef}
                placeholder="Enter description"
              />
            </Form.Group>

            {/* Price */}
            <Form.Group className="mb-3">
              <Form.Label>Price: ${price}</Form.Label>
              <Form.Range
                min={500}
                max={3000}
                step={50}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            {/* Checkboxes */}
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Pet Friendly"
                ref={petsRef}
              />
              <Form.Check
                type="checkbox"
                label="Has Parking"
                ref={parkingRef}
              />
              <Form.Check
                type="checkbox"
                label="Utilities Included"
                ref={utilitiesRef}
              />

              <Form.Label className="mt-2">Bedrooms:</Form.Label>
              {[1, 2, 3, 4, 5].map((num, i) => (
                <Form.Check
                  key={num}
                  type="checkbox"
                  label={`${num} Bed`}
                  ref={(el) => (bedroomRefs.current[i] = el)}
                />
              ))}
            </Form.Group>

            {/* Map */}
            <Form.Group className="mb-3">
              <Form.Label>Select Location (click on map)</Form.Label>

              <div style={{ height: "300px", width: "100%" }}>
                <MapContainer
                  center={[43.075, -89.4012]}
                  zoom={14}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='© OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <LocationPicker />
                </MapContainer>
              </div>

              {position && (
                <p className="mt-2">
                  Selected: {position[0].toFixed(5)}, {position[1].toFixed(5)}
                </p>
              )}

              <Button
                variant="secondary"
                size="sm"
                className="mt-2"
                onClick={() => setPosition(null)}
              >
                Clear Location
              </Button>
            </Form.Group>

            {/* Submit */}
            <div className="text-center">
              <Button type="submit">Add Apartment</Button>
            </div>

          </Form>

        </Col>
      </Row>
    </>
  );
}
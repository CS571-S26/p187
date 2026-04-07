import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// placeholder info for apartments (now with filter properties added)
const apartments = [
  {
    id: 1,
    name: "Sterling Hall",
    description: "This is where the lectures are held!",
    position: [43.07485030040818, -89.40508326978035],
    price: 1200,
    pets: false,
    parking: false,
  },
  {
    id: 2,
    name: "Capitol",
    description: "The state Capitol building",
    position: [43.07478920055748, -89.38415535879386],
    price: 2000,
    pets: true,
    parking: true,
  },
  {
    id: 3,
    name: "Camp Randall Stadium",
    description: "This is where opposing teams schedule easy games",
    position: [43.0702, -89.41303],
    price: 900,
    pets: true,
    parking: false,
  },
];

export default function Map({ filters }) {

  // Apply filters
  const filteredApartments = apartments.filter((apt) => {
    if (filters) {
      if (apt.price > filters.maxPrice) return false;
      if (filters.pets && !apt.pets) return false;
      if (filters.parking && !apt.parking) return false;
    }
    return true;
  });

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <MapContainer
        center={[43.075, -89.4012]}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredApartments.map((apt) => (
          <Marker key={apt.id} position={apt.position}>
            <Popup>
              <strong>{apt.name}</strong>
              <br />
              {apt.description}
              <br />
              ${apt.price} / month
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
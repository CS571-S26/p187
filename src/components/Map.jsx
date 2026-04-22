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

export default function Map({ filters, apartments }) {

  const filteredApartments = apartments.filter((apt) => {
    if (filters) {
      if (apt.price > filters.maxPrice) return false;
      if (filters.pets && !apt.pets) return false;
      if (filters.parking && !apt.parking) return false;
      if (filters.utilities && !apt.utilities) return false;

      // bedrooms filter
      if (filters.bedrooms.length > 0) {
        const match = filters.bedrooms.some((b) =>
          apt.bedrooms.includes(b)
        );
        if (!match) return false;
      }
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
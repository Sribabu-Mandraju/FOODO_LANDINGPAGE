import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyMap = () => {
  const position = [51.505, -0.09]; // Initial map center position
  const markers = [
    { position: [51.51, -0.12], name: 'Location 1' },
    { position: [51.50, -0.10], name: 'Location 2' },
    { position: [51.52, -0.08], name: 'Location 3' },
  ];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            {marker.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MyMap;
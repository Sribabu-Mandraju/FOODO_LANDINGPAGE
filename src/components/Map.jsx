import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyMap = () => {
  const [initialPosition, setInitialPosition] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setInitialPosition([latitude, longitude]);
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error('Error getting location:', error);
        setInitialPosition([51.505, -0.09]);
      }
    );
  }, []);

  const markers = [
        { position: [12.925651440220651, 80.11084268465441], name: 'Good Life Centre ' },
        { position: [13.100519917790773, 80.2308157153456], name: 'Greater Love Children Home' },
        { position: [13.04680151555612,  80.2604371981452], name: 'Annai Anbalayaa Trust    ' },
        { position: [13.053562544980872, 80.2226628], name: 'Open Door Orphanage and Community Centre' },
        { position: [12.9216, 80.1539], name: 'No: 3/218, Gangaiamman Koil St, near Advent Christian Church, Perumbakkam, Chennai, Tamil Nadu 600100' },
  ];

  return initialPosition ? (
    <MapContainer center={initialPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>Your location</Popup>
        </Marker>
      )}
    </MapContainer>
  ) : (
    <div>Loading...</div>
  );
};

export default MyMap;
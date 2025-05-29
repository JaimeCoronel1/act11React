import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Ejemplo: ubicación de Ciudad de México
const center = {
  lat: 19.4326,
  lng: -99.1332
};

export default function Mapa() {
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker
          position={center}
          onClick={() => setSelected(center)}
        />
        {selected && (
          <InfoWindow
            position={selected}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2 className="text-lg font-bold">Ciudad de México</h2>
              <p>Esta es la ubicación del marcador.</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

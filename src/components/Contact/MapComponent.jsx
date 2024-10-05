import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    // Inisialisasi peta
    const map = L.map('map').setView([19.35324144471907,  -99.16160436562546], 17); // Koordinat awal dan zoom level

    // Menambahkan tile layer dari OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Menambahkan marker 
    L.marker([19.35324144471907, -99.16160436562546]).addTo(map)
      .bindPopup('Paradise View')
      .openPopup();

    return () => {
      map.remove(); // Cleanup saat komponen di-unmount
    };
  }, []);

  return (
    <div>
      {/* Container untuk peta */}
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default MapComponent;

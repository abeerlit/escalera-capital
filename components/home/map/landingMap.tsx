// components/MapComponent.tsx

import { useState, useRef, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const MapComponent = () => {
  // Map type state
  const [mapType, setMapType] = useState<'roadmap' | 'satellite' | 'hybrid'>('roadmap');
  const [drawing, setDrawing] = useState(false);
  const [zoom, setZoom] = useState(5);
  const mapRef = useRef<google.maps.Map | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Sample markers (simulate density)
  const [markers] = useState([
    { lat: 32.7767, lng: -96.797, title: 'Dallas' },
    { lat: 29.7604, lng: -95.3698, title: 'Houston' },
    { lat: 29.4241, lng: -98.4936, title: 'San Antonio' },
    { lat: 35.222, lng: -97.4395, title: 'Norman' },
    { lat: 30.2672, lng: -97.7431, title: 'Austin' },
    { lat: 33.4484, lng: -112.074, title: 'Phoenix' },
    { lat: 36.1627, lng: -86.7816, title: 'Nashville' },
    { lat: 29.9511, lng: -90.0715, title: 'New Orleans' },
    { lat: 35.4676, lng: -97.5164, title: 'Oklahoma City' },
    { lat: 39.7392, lng: -104.9903, title: 'Denver' },
    // Add more for density
    { lat: 32.7555, lng: -97.3308, title: 'Fort Worth' },
    { lat: 29.3013, lng: -94.7977, title: 'Galveston' },
    { lat: 30.3322, lng: -81.6557, title: 'Jacksonville' },
    { lat: 31.9686, lng: -99.9018, title: 'Texas Center' },
    { lat: 34.7465, lng: -92.2896, title: 'Little Rock' },
    { lat: 32.7157, lng: -117.1611, title: 'San Diego' },
    { lat: 29.7604, lng: -95.3698, title: 'Houston 2' },
    { lat: 29.7604, lng: -95.3698, title: 'Houston 3' },
    { lat: 29.7604, lng: -95.3698, title: 'Houston 4' },
    { lat: 29.7604, lng: -95.3698, title: 'Houston 5' },
    // ...add as many as needed for demo
  ]);

  const containerStyle = {
    width: '70dvw',
    height: 'calc(100vh - 115px)',
    border: '2px solid #ccc',
  };

  // Custom red diamond marker icon with black border and shadow
  const markerIcon = {
    url: `data:image/svg+xml;utf-8,<svg width='32' height='40' viewBox='0 0 32 40' xmlns='http://www.w3.org/2000/svg'><polygon points='16,4 30,20 16,36 2,20' stroke='white' stroke-width='2' fill='red' /></svg>`,
    scaledSize: { width: 32, height: 40 } as google.maps.Size,
  };

  // Map center (central US)
  const center = { lat: 32.7767, lng: -96.797 };

  // Close panel on outside click
  useEffect(() => {
    if (!showPanel) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowPanel(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showPanel]);

  return (
    <div className="relative w-fit">
      {/* Map Container */}
      <LoadScript googleMapsApiKey="AIzaSyBE8Ll3UulgRBHWCGyyTLghsROB3-ZZNPc">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          mapTypeId={mapType}
          onLoad={map => { mapRef.current = map; }}
          options={{
            mapTypeControl: false, // We'll use our own control
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: false,
            rotateControl: false,
            scaleControl: false,
            panControl: false,
          }}
        >
          {/* Markers with custom icon */}
          {markers.map((marker, idx) => (
            <Marker key={idx} position={marker} icon={markerIcon} title={marker.title} />
          ))}
        </GoogleMap>
      </LoadScript>
      {/* Layer control (top right) */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-end space-y-2">
        {/* Zoom controls */}
        <div className="flex flex-col bg-white border border-gray-400 mb-2 w-10 overflow-hidden">
          <button
            className="w-full h-10 border-b border-gray-400 flex items-center justify-center hover:bg-gray-100 focus:outline-none"
            onClick={() => setZoom(z => Math.min(z + 1, 21))}
            aria-label="Zoom in"
          >
            {/* Plus SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="4" width="2" height="14" rx="2" fill="#222" />
              <rect x="4" y="10" width="14" height="2" rx="2" fill="#222" />
            </svg>
          </button>
          <button
            className="w-full h-10 flex items-center justify-center hover:bg-gray-100 focus:outline-none"
            onClick={() => setZoom(z => Math.max(z - 1, 1))}
            aria-label="Zoom out"
          >
            {/* Minus SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="10" width="14" height="2" rx="2" fill="#222" />
            </svg>
          </button>
        </div>
        {/* Custom map controls */}
        <div className="relative flex flex-col gap-2 items-stretch">
          <button
            className={`flex flex-col justify-center items-center p-1 border border-gray-400 bg-white hover:bg-gray-200 `}
            onClick={() => setShowPanel(v => !v)}
            aria-label="Show map layers"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" fill="#eee" stroke="#888" strokeWidth="2" /><rect x="6" y="8" width="12" height="8" rx="1" fill="#ccc" /></svg>
            <span className="text-xs">Aerial</span>
            {/* Floating panel for map layers (only on Aerial click) */}
            {showPanel && (
              <div ref={panelRef} className="bg-white border border-gray-400 w-48 flex flex-col absolute right-12 top-0">
                {['Map', 'Satellite'].map((label) => (
                  <div onClick={() => setMapType(label === 'Map' ? 'roadmap' : 'hybrid')} key={label} className="hover:bg-gray-200 cursor-pointer border-b last:border-b-0 border-gray-400 flex items-center justify-between p-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-gray-400 rounded"
                        checked={mapType === (label === 'Map' ? 'roadmap' : 'hybrid')}
                        readOnly
                      />
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </button>
          <button
            className={`flex flex-col justify-center items-center p-1 border border-gray-400 bg-white hover:bg-gray-200  ${drawing ? ' border-gray-200' : ''}`}
            onClick={() => setDrawing(d => !d)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="2" fill="#fff" stroke="#888" strokeWidth="2" /><path d="M8 16L16 8" stroke="#888" strokeWidth="2" /><circle cx="8" cy="16" r="1.5" fill="#888" /><circle cx="16" cy="8" r="1.5" fill="#888" /></svg>
            <span className="text-xs">Draw</span>
          </button>
        </div>
      </div>
    </div>
  );
};

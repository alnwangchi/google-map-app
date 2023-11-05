'use client';

import React, { useRef, useState, useEffect } from 'react';

interface MapComponentProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const MapComponent = ({ center, zoom }: MapComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map]);

  return <div ref={ref} id="map" style={{ width: '100%', height: '100%' }} />;
};

export default MapComponent;

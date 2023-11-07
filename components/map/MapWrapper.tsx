'use client';

import MapComponent from '@/components/map/MapComponent';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

// Use Taipei Train Station as default center
const DEFAULT_CENTER: google.maps.LatLngLiteral = {
  lat: 25.048111960214577,
  lng: 121.51705041522831
};
const DEFAULT_ZOOM: number = 12;

export default function MapWrapper() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '';

  return (
    <Wrapper apiKey={apiKey}>
      <MapComponent center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} />
    </Wrapper>
  );
}

'use client';

import MapComponent from '@/component/MapComponent';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

// Use Taipei Train Station as default center
const DEFAULT_CENTER: google.maps.LatLngLiteral = {
  lat: 25.048111960214577,
  lng: 121.51705041522831
};
const DEFAULT_ZOOM: number = 12;

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '';

  console.log({ apiKey });
  return (
    <main className="h-screen w-screen">
      <Wrapper apiKey={apiKey}>
        <MapComponent center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} />
      </Wrapper>
    </main>
  );
}

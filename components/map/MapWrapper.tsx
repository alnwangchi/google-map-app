'use client';

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { TStores } from '@/interface/I_Stores';
import markerIcon from '@/images/marker.svg';
import Marker from '@/components/Marker';

// Use Taipei Train Station as default center
const DEFAULT_CENTER = {
  lat: 25.048111960214577,
  lng: 121.51705041522831
};
const DEFAULT_ZOOM: number = 12;

interface MapWrapperProps {
  stores: TStores[];
}

export default function MapWrapper({ stores }: MapWrapperProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '';

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <APIProvider apiKey={apiKey}>
        <Map
          zoom={DEFAULT_ZOOM}
          center={DEFAULT_CENTER}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {stores.map((store) => (
            <Marker
              key={`${store.name}_${store.lat}_${store.lng}`}
              name={store.name}
              position={{ lat: store.lat, lng: store.lng }}
              recycleQTY={store.recycleQTY}
            />
          ))}
          {/* {stores.map((store) => (
            <AdvancedMarker
              key={`${store.name}_${store.lat}_${store.lng}`}
              position={{ lat: store.lat, lng: store.lng }}
              onClick={() => {}}
            >
              <Marker name={store.name} recycleQTY={store.recycleQTY} />
            </AdvancedMarker>
          ))} */}
        </Map>
      </APIProvider>
    </div>
  );
}

'use client';

import GoogleMapReact, { Position } from 'google-map-react';
import { TStores } from '@/interface/I_Stores';
import Marker from '@/components/Marker';
import { getMapBounds } from '@/utils/boundsCalculator';

// Use Taipei Train Station as default center
const DEFAULT_CENTER: Position = {
  lat: 25.048111960214577,
  lng: 121.51705041522831
};
const DEFAULT_ZOOM: number = 11;

interface MapWrapperProps {
  stores: TStores[];
}

export default function MapWrapper({ stores }: MapWrapperProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '';

  // Re-center map when resizing the window
  const bindResizeListener = (
    map: google.maps.Map,
    maps: google.maps.CoreLibrary,
    bounds: google.maps.LatLngBounds
  ) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  const handleApiLoaded = (map: google.maps.Map, maps: google.maps.CoreLibrary) => {
    // 根據stores來取得包含所有stores的邊界矩形(bounds)
    const bounds = getMapBounds(map, maps, stores);

    // 設定檢視區(map)包含指定的邊界矩形(bounds)
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {stores.map((store) => (
          <Marker
            key={`${store.name}_${store.lat}_${store.lng}`}
            name={store.name}
            lat={store.lat}
            lng={store.lng}
            recycleQTY={store.recycleQTY}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

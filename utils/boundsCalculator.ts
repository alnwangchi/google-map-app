import { TStores } from '@/interface/I_Stores';

// 計算所有store標點位置，並返回一個邊界矩形(bounds)
const getMapBounds = (map: google.maps.Map, maps: google.maps.CoreLibrary, places: TStores[]) => {
  // 創建一個空的邊界矩形(bounds)
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    // extend 可以延伸邊界來包含指定的標點
    // 透過LatLng來將lat, lng轉換成標點
    bounds.extend(new maps.LatLng(place.lat, place.lng));
  });

  return bounds;
};

export { getMapBounds };

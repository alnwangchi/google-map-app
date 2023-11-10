'use client';
import MapWrapper from '@/components/map/MapWrapper';
import { TStores } from '@/interface/I_Stores';
import { storesConverter } from '@/utils/converter';
import { useEffect, useState } from 'react';

// async function getStores() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/stores`, {
//     headers: {
//       'content-type': 'application/json;charset=UTF-8'
//     },
//     cache: 'no-store'
//   });
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
//   return await res.json();
// }

export default function Home() {
  // const storesResponse = await getStores();

  const [data, setData] = useState([]);
  console.log('🚀 ~ data:', data);

  useEffect(() => {
    (() => {
      fetch(`http://localhost:3000/api/stores`, {
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        },
        cache: 'no-store'
      })
        .then((res) => res.json())
        .then((data) => {
          setData(storesConverter(data));
        });
    })();
  }, []);

  // const stores = storesConverter(storesResponse);
  const stores = [];

  return (
    <main className="h-screen w-screen">
      <MapWrapper stores={data as TStores[]} />
    </main>
  );
}

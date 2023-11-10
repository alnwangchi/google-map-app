'use client';
import MapWrapper from '@/components/map/MapWrapper';
import { TStores } from '@/interface/I_Stores';
import { storesConverter } from '@/utils/converter';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<TStores[]>([]);
  console.log('🚀 ~ data:', data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DOMAIN}/api/stores?random=${Math.random()}`,
          {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            cache: 'no-store'
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const responseData = await response.json();
        const stores = storesConverter(responseData);
        setData(stores as TStores[]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="h-screen w-screen">
      <MapWrapper stores={data as TStores[]} />
    </main>
  );
}

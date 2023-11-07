import MapWrapper from '@/components/map/MapWrapper';
import { storesConverter } from '@/utils/converter';

async function getStores() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/stores`, {
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    cache: 'no-store'
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return await res.json();
}

export default async function Home() {
  const storesResponse = await getStores();

  const stores = storesConverter(storesResponse);
  console.log(stores);
  return (
    <main className="h-screen w-screen">
      <MapWrapper />
    </main>
  );
}

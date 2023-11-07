import MapWrapper from '@/components/map/MapWrapper';
import { TStores } from '@/interface/I_Stores';
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

  return (
    <main className="h-screen w-screen">
      <MapWrapper stores={stores as TStores[]} />
    </main>
  );
}

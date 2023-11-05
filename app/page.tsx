import Marker from '@/components/Marker';
import InformationCard from '@/components/Marker';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <Marker name="OH YA" recycleQTY={11} />
    </main>
  );
}

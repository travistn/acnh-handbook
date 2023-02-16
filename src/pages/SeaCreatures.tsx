import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import SeaCreatureCard from '../components/SeaCreatureCard';
import Loading from '../components/Loading';
import PaginatedItems from '../components/PaginatedItems';

const SeaCreatures = () => {
  const [seaCreatures, setSeaCreatures] = useState<[]>();
  const { data, isLoading } = useQuery({
    queryKey: ['sea-creatures'],
    queryFn: () =>
      fetch(`https://api.nookipedia.com/nh/sea?api_key=${import.meta.env.VITE_API_KEY}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='flex flex-row py-8 w-[90%] m-auto flex-wrap gap-8 lg:justify-center lg:w-[80%]'>
        {seaCreatures?.map((seaCreature: any) => (
          <SeaCreatureCard key={seaCreature?.name} seaCreature={seaCreature} />
        ))}
      </article>
      <article className='pb-4'>
        <PaginatedItems items={data} itemsPerPage={9} setItems={setSeaCreatures} />
      </article>
    </main>
  );
};

export default SeaCreatures;

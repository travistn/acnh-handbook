import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import VillagerCard from '../components/VillagerCard';
import PaginatedItems from '../components/PaginatedItems';
import Loading from '../components/Loading';

const Villagers = () => {
  const [villagers, setVillagers] = useState([]);
  const { data, isLoading } = useQuery({
    queryKey: ['villagers'],
    queryFn: () =>
      fetch(
        `https://api.nookipedia.com/villagers?nhdetails=true&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json()),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='flex flex-row py-8 w-[90%] m-auto flex-wrap gap-8 lg:justify-center lg:w-[80%]'>
        {villagers?.map((villager: any, index: number) => (
          <VillagerCard key={villager?.id + index} villager={villager} />
        ))}
      </article>
      <article className='pb-4'>
        <PaginatedItems items={data} itemsPerPage={9} setItems={setVillagers} />
      </article>
    </main>
  );
};

export default Villagers;

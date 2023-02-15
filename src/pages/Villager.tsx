import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Loading from '../components/Loading';
import VillagerCard from '../components/VillagerCard';

const Villager = () => {
  const { villagerName } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['villager'],
    queryFn: () =>
      fetch(
        `https://api.nookipedia.com/villagers?name=${villagerName}&nhdetails=true&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json()),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='w-[90%] flex justify-center m-auto pt-8 lg:pt-12'>
        <VillagerCard villager={data?.[0]} />
      </article>
    </main>
  );
};

export default Villager;

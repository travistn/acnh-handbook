import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import FishCard from '../components/FishCard';
import Loading from '../components/Loading';
import PaginatedItems from '../components/PaginatedItems';

const Fishes = () => {
  const [fish, setFish] = useState<[]>();
  const { data, isLoading } = useQuery({
    queryKey: ['bugs'],
    queryFn: () =>
      fetch(`https://api.nookipedia.com/nh/fish?api_key=${import.meta.env.VITE_API_KEY}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='flex flex-row py-8 w-[90%] m-auto flex-wrap gap-8 lg:justify-center lg:w-[80%]'>
        {fish?.map((fish: any) => (
          <FishCard key={fish?.name} fish={fish} />
        ))}
      </article>
      <article className='pb-4'>
        <PaginatedItems items={data} itemsPerPage={9} setItems={setFish} />
      </article>
    </main>
  );
};

export default Fishes;

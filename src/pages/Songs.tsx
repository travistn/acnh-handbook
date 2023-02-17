import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import SongCard from '../components/SongCard';
import Loading from '../components/Loading';
import PaginatedItems from '../components/PaginatedItems';

const Songs = () => {
  const [songs, setSongs] = useState<any[]>();
  const { data, isLoading } = useQuery({
    queryKey: ['songs'],
    queryFn: () => fetch(`http://acnhapi.com/v1/songs`).then((res) => res.json()),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='flex flex-row py-8 w-[90%] m-auto flex-wrap gap-8 lg:justify-center lg:w-[80%]'>
        {songs?.map((song) => (
          <SongCard key={song?.id} song={song} />
        ))}
      </article>
      <article className='pb-4'>
        <PaginatedItems items={Object.values(data || {})} itemsPerPage={9} setItems={setSongs} />
      </article>
    </main>
  );
};

export default Songs;

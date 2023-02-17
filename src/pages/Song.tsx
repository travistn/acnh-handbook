import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import SongCard from '../components/SongCard';
import Loading from '../components/Loading';

const Song = () => {
  const { songId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['song'],
    queryFn: () => fetch(`https://acnhapi.com/v1/songs/${songId}`).then((res) => res.json()),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='w-[90%] flex justify-center m-auto pt-8 lg:pt-12'>
        <SongCard song={data} />
      </article>
    </main>
  );
};

export default Song;

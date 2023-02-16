import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import SeaCreatureCard from '../components/SeaCreatureCard';
import Loading from '../components/Loading';

const SeaCreature = () => {
  const { seaCreatureName } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['sea-creature'],
    queryFn: () =>
      fetch(
        `https://api.nookipedia.com/nh/sea/${seaCreatureName?.split('-').join(' ')}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json()),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='w-[90%] flex justify-center m-auto pt-8 lg:pt-12'>
        <SeaCreatureCard seaCreature={data} />
      </article>
    </main>
  );
};

export default SeaCreature;

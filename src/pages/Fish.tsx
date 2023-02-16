import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import FishCard from '../components/FishCard';
import Loading from '../components/Loading';

const Fish = () => {
  const { fishName } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['fish'],
    queryFn: () =>
      fetch(
        `https://api.nookipedia.com/nh/fish/${fishName?.split('-').join(' ')}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json()),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='w-[90%] flex justify-center m-auto pt-8 lg:pt-12'>
        <FishCard fish={data} />
      </article>
    </main>
  );
};

export default Fish;

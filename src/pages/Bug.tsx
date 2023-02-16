import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import BugCard from '../components/BugCard';
import Loading from '../components/Loading';

const Bug = () => {
  const { bugName } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['bug'],
    queryFn: () =>
      fetch(
        `https://api.nookipedia.com/nh/bugs/${bugName?.split('-').join(' ')}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json()),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='w-[90%] flex justify-center m-auto pt-8 lg:pt-12'>
        <BugCard bug={data} />
      </article>
    </main>
  );
};

export default Bug;

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import BugCard from '../components/BugCard';
import Loading from '../components/Loading';
import PaginatedItems from '../components/PaginatedItems';

const Bugs = () => {
  const [bugs, setBugs] = useState<[]>();
  const { data, isLoading } = useQuery({
    queryKey: ['bugs'],
    queryFn: () =>
      fetch(`https://api.nookipedia.com/nh/bugs?api_key=${import.meta.env.VITE_API_KEY}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <main className='min-h-screen bg-teal'>
      <article className='flex flex-row py-8 w-[90%] m-auto flex-wrap gap-8 lg:justify-center lg:w-[80%]'>
        {bugs?.map((bug: any) => (
          <BugCard key={bug?.name} bug={bug} />
        ))}
      </article>
      <article className='pb-4'>
        <PaginatedItems items={data} itemsPerPage={9} setItems={setBugs} />
      </article>
    </main>
  );
};

export default Bugs;

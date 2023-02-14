import { useQuery } from '@tanstack/react-query';

import VillagerCard from '../components/VillagerCard';

const Villagers = () => {
  const { data: villagers } = useQuery({
    queryKey: ['villagers'],
    queryFn: () =>
      fetch(
        `https://api.nookipedia.com/villagers?nhdetails=true&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json()),
  });

  return (
    <main className='min-h-screen bg-teal'>
      <article className='flex flex-row pt-8 w-[90%] m-auto'>
        <VillagerCard villager={villagers?.[15]} />
      </article>
    </main>
  );
};

export default Villagers;

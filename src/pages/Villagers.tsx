import { useQuery } from '@tanstack/react-query';

import VillagerCard from '../components/VillagerCard';

const Villagers = () => {
  const { data: villagers } = useQuery({
    queryKey: ['villagers'],
    queryFn: () =>
      fetch(`https://api.nookipedia.com/villagers?api_key=${import.meta.env.VITE_API_KEY}`).then(
        (res) => res.json()
      ),
  });

  return (
    <main className='min-h-screen bg-teal text-[#194c89]'>
      <div className='flex flex-col pt-8 w-[90%] m-auto'>
        <VillagerCard villager={villagers?.[1]} />
      </div>
    </main>
  );
};

export default Villagers;

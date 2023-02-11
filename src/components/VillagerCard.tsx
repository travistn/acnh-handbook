type VillagerCardProps = {
  villager: {
    name: string;
  };
};

const VillagerCard = ({ villager }: VillagerCardProps) => {
  return (
    <article className='w-full h-[400px] bg-dark-teal rounded-md lg:w-[351px]'>
      <div className='p-4'>
        <h1 className='text-white text-[20px] font-bold'>{villager?.name}</h1>
      </div>
      <div className='bg-cream h-full rounded-bl-md rounded-br-md'></div>
    </article>
  );
};

export default VillagerCard;

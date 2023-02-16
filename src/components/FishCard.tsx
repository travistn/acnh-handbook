import { useNavigate } from 'react-router-dom';

type FishCardProps = {
  fish: {
    name: string;
    image_url: string;
    location: string;
    sell_nook: number;
    shadow_size: string;
    north: {
      months: string;
      availability_array: [];
    };
    south: {
      months: string;
    };
  };
};

const FishCard = ({ fish }: FishCardProps) => {
  const navigate = useNavigate();
  return (
    <article className='w-full h-max bg-dark-teal rounded-md lg:w-[380px]'>
      <header className='flex flex-row items-center gap-2 py-1 px-4'>
        <img
          src={fish?.image_url}
          alt={`${fish?.name}-icon`}
          className='w-[50px] h-[50px] hover:cursor-pointer hover:opacity-[.85]'
          onClick={() => navigate(`/fish/${fish?.name.split(' ').join('-').toLowerCase()}`)}
        />
        <h1
          className='capitalize text-white font-bold text-[18px] hover:underline hover:underline-offset-4 hover:cursor-pointer'
          onClick={() => navigate(`/fish/${fish?.name.split(' ').join('-').toLowerCase()}`)}>
          {fish?.name}
        </h1>
      </header>
      <article className='bg-cream h-full p-4 rounded-bl-md rounded-br-md'>
        <article className='bg-beige h-max p-4 rounded-md flex flex-col gap-3'>
          <div className='w-full flex flex-row gap-2 items-center'>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-1 px-4 rounded-md text-center'>
              Location
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md truncate'>
              {fish?.location}
            </p>
          </div>
          <div className='w-full flex flex-row gap-2 items-center'>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-1 px-4 rounded-md text-center'>
              Price
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md'>
              {fish?.sell_nook}
            </p>
          </div>
          <div className='w-full flex flex-row gap-2 items-center'>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-1 px-4 rounded-md text-center'>
              Northern
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md'>
              {fish?.north.months}
            </p>
          </div>
          <div className='w-full flex flex-row gap-2 items-center'>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-1 px-4 rounded-md text-center'>
              South
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md'>
              {fish?.south.months}
            </p>
          </div>
          <div className='w-full flex flex-row gap-2 items-center'>
            <p className='min-w-[32%] text-[145x] font-bold text-white bg-dark-beige py-1 px-4 rounded-md text-center'>
              Time
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md'>
              {fish?.north.availability_array.map((availability: any) => availability.time)}
            </p>
          </div>
          <div className='w-full flex flex-row gap-2 items-center'>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-1 px-4 rounded-md text-center'>
              Size
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md'>
              {fish?.shadow_size}
            </p>
          </div>
        </article>
      </article>
    </article>
  );
};

export default FishCard;

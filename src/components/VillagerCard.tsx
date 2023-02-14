type VillagerCardProps = {
  villager: {
    name: string;
    gender: string;
    personality: string;
    species: string;
    birthday_day: string;
    birthday_month: string;
    nh_details: {
      icon_url: string;
      photo_url: string;
      hobby: string;
      fav_colors: string[];
      fav_styles: string[];
    };
  };
};

const VillagerCard = ({ villager }: VillagerCardProps) => {
  return (
    <article className='w-full h-max bg-dark-teal rounded-md lg:w-[351px]'>
      <header className='flex flex-row items-center gap-2 py-2 px-4'>
        <img
          src={villager?.nh_details.icon_url}
          alt={`${villager?.name}-icon`}
          className='w-[50px] h-[50px]'
        />
        <h1 className='text-white text-[18px] font-bold'>{villager?.name}</h1>
      </header>
      <article className='bg-cream h-full rounded-bl-md rounded-br-md p-4 flex flex-col gap-4'>
        <article className='bg-beige h-max w-full rounded-md p-4 flex flex-row items-center gap-4'>
          <img
            src={villager?.nh_details.photo_url}
            alt={`${villager?.name}-pic`}
            className='w-[200px] h-[150px] rounded-md overflow-hidden'
          />
          <div className='w-full flex flex-col gap-2'>
            <p className='bg-white py-1 px-4 rounded-md font-bold text-very-dark-beige text-[15px]'>
              {villager?.gender}
            </p>
            <p className='bg-white py-1 px-4 rounded-md font-bold text-very-dark-beige text-[15px]'>
              {villager?.personality}
            </p>
            <p className='bg-white py-1 px-4 rounded-md font-bold text-very-dark-beige text-[15px]'>
              {villager?.species}
            </p>
            <p className='bg-white py-1 px-4 rounded-md font-bold text-very-dark-beige text-[15px]'>
              {`${villager?.birthday_month} ${villager?.birthday_day}`}
            </p>
          </div>
        </article>
        <article className='bg-beige h-max w-full rounded-md p-4 flex flex-col gap-2'>
          <div className='w-full flex flex-row gap-2'>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-1 px-4 rounded-md text-center'>
              Hobby
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md'>
              {villager?.nh_details.hobby}
            </p>
          </div>
          <div className='w-full flex flex-row gap-2'>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-1 px-4 rounded-md text-center'>
              Colors
            </p>
            <div className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md flex flex-row'>
              {villager?.nh_details.fav_colors.map((color) => (
                <div key={color} className='flex flex-row gap-1'>
                  <div className={`w-[20px] h-[20px] bg-fav-${color.toLowerCase()} rounded-md`} />
                  <p className='mr-1'>{color}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full flex flex-row gap-2'>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-1 px-4 rounded-md text-center'>
              Styles
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md'>
              {villager?.nh_details.fav_styles.map((style, index) => (index ? ', ' : '') + style)}
            </p>
          </div>
        </article>
      </article>
    </article>
  );
};

export default VillagerCard;

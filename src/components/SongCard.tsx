import { useState, useEffect, useRef } from 'react';

import music_note from '../assets/music-note.png';
import bells from '../assets/bells.png';

type SongCardProps = {
  song: {
    image_uri: string;
    music_uri: string;
    name: {
      'name-USen': string;
    };
    'buy-price': number;
    'sell-price': number;
  };
};

const SongCard = ({ song }: SongCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>();

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  return (
    <article className='w-full h-max bg-dark-teal rounded-md lg:w-[380px]'>
      <header className='flex flex-row items-center gap-2 py-1 px-4'>
        <img
          src={music_note}
          alt='music-note-icon'
          className='w-[40px] h-[40px] hover:cursor-pointer hover:opacity-[.85] mb-1'
        />
        <h1 className='capitalize text-white font-bold text-[18px] hover:underline hover:underline-offset-4 hover:cursor-pointer'>
          {song?.name['name-USen']}
        </h1>
      </header>
      <article className='bg-cream h-full p-4 rounded-bl-md rounded-br-md flex flex-col items-center gap-4'>
        <article className='bg-teal h-fit w-fit p-4 rounded-full'>
          <img
            src={song?.image_uri}
            alt='song-cover'
            className={`rounded-full h-[200px] hover:cursor-pointer ${
              isPlaying ? 'animate-[spin_2s_linear_infinite]' : ''
            }`}
            onClick={() => setIsPlaying(!isPlaying)}
          />
          <audio
            hidden
            onEnded={() => setIsPlaying(!isPlaying)}
            ref={audioRef}
            src={song?.music_uri}
          />
        </article>
        <article className='bg-beige h-max w-full p-4 rounded-md flex flex-col gap-3'>
          <div className='w-full flex flex-row gap-2 items-center'>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-[.3rem] px-4 rounded-md text-center'>
              Buy
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md flex flex-row items-end gap-2'>
              <img src={bells} alt='bells-icon' className='w-[25px] h-[25px]' />
              {song?.['buy-price'] ? song?.['buy-price'] : 'Not for sale'}
            </p>
          </div>
          <div className='w-full flex flex-row gap-2 items-center '>
            <p className='min-w-[32%] text-[15px] font-bold text-white bg-dark-beige py-[.3rem] px-4 rounded-md text-center '>
              Sell
            </p>
            <p className='w-full bg-white text-[15px] font-bold text-very-dark-beige py-1 px-4 rounded-md flex flex-row items-end gap-2'>
              <img src={bells} alt='bells-icon' className='w-[25px] h-[25px]' />
              {song?.['sell-price']}
            </p>
          </div>
        </article>
      </article>
    </article>
  );
};

export default SongCard;

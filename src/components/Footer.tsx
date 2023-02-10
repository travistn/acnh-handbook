import { BsDiscord, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='w-full bg-black flex flex-col items-center gap-4 py-4'>
      <section className='flex flex-row gap-8'>
        <BsDiscord className='text-white text-[22px] lg:text-[26px] cursor-pointer' />
        <BsTwitter className='text-white text-[22px] lg:text-[26px] cursor-pointer' />
        <BsInstagram className='text-white text-[22px] lg:text-[26px] cursor-pointer' />
      </section>
      <small className='text-white text-[14px] lg:text-[16px]'>Copyright © 2023</small>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';

const links: string[] = ['bugs', 'fish', 'sea-creatures', 'villagers', 'songs', 'recipes', 'items'];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <>
      <nav className='w-full flex flex-row items-center bg-very-dark-teal p-4'>
        <header className='flex flex-row gap-4 items-center'>
          <img
            src={logo}
            alt='acnh-logo'
            className='w-[36.65px] h-[40px] cursor-pointer lg:w-[43.2px] lg:h-[45px]'
            onClick={() => navigate('/')}
          />
          <h1
            className='text-white text-[20px] font-bold cursor-pointer lg:text-[24px]'
            onClick={() => navigate('/')}>
            ACNH Handbook
          </h1>
        </header>
        <ul className='hidden lg:flex flex-row gap-4 ml-10 items-start'>
          {links.map((link) => (
            <Link
              to={`${link}/page/1`}
              key={link}
              className={`text-white capitalize text-[18px] ${
                location.pathname.slice(1, location.pathname.indexOf('/page/')) === link
                  ? 'border-b-[2px] border-teal'
                  : ''
              }`}>
              {link.split('-').join(' ')}
            </Link>
          ))}
        </ul>
        <div className='ml-auto border-[1px] border-white/[.2] px-3 py-2 rounded-md lg:hidden'>
          <AiOutlineMenu className='text-[22px] text-white' onClick={() => setActive(!active)} />
        </div>
      </nav>
      {active && (
        <section className='w-full bg-very-dark-teal pl-5 pt-2 pb-3 border-t-[1px] border-white/[.2]'>
          <ul className='flex flex-col gap-2'>
            {links.map((link) => (
              <Link to={link} key={link} className='text-white capitalize'>
                {link.split('-').join(' ')}
              </Link>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Navbar;

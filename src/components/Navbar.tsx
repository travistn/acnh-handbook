import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='w-full flex flex-row bg-very-dark-teal p-4'>
      <header className='flex flex-row gap-4 items-center'>
        <img src={logo} alt='acnh-logo' className='w-[36.65px] h-[40px]' />
        <h1 className='text-white text-[20px] font-bold'>ACNH Handbook</h1>
      </header>
    </nav>
  );
};

export default Navbar;

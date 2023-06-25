import { useContext } from 'react';
import { TbSearch, TbMoon } from 'react-icons/tb';
import { FaGithubAlt } from 'react-icons/fa';
import { TbMenu2, TbX } from 'react-icons/tb';
import AppContext from '../context/AppContext';

const Topbar = ({ siteTheme, setSiteTheme }) => {
  const {sidebarActive, setSidebarActive } = useContext(AppContext);

  const toggleTheme = () => {
    const newTheme = (siteTheme === 'light') ? 'dark' : 'light';
    setSiteTheme(newTheme);
  }

  return (
    <nav className={`pr-8 pl-4 flex justify-between items-center border-0 border-b border-neutral-200 dark:border-neutral-800 z-10 ${sidebarActive ? 'topbar-sb-active' : 'topbar'}`}>
      {sidebarActive ? (
        <TbX
          id='topbar-close'
          className='text-dark text-lg cursor-pointer'
          onClick={() => setSidebarActive(!sidebarActive)}
        />
      ) : (
          <TbMenu2
            className='text-dark text-lg cursor-pointer'
            onClick={() => setSidebarActive(!sidebarActive)}
          />
        )}
      <section className='flex items-center gap-6'>
        <div className='border border-neutral-200 dark:border-neutral-800 rounded p-1 flex hover:border-primary duration-100'>
          <TbSearch className='text-primary' />
          <input type='text' placeholder='Search' className='border-0 pl-2' />
        </div>
        <a href='https://github.com/MunozCesarCM/Flexcore' target='_blank' className='border-0 border-b border-neutral-200 dark:border-neutral-800 hover:border-primary duration-100'>
          <FaGithubAlt className='text-primary cursor-pointer' />
        </a>
        <button className='w-10 h-10 rounded border border-neutral-200 hover:border-primary p-1 cursor-pointer duration-100' onClick={toggleTheme}>
          <TbMoon />
        </button>
      </section>
    </nav>
  );
};

export default Topbar;


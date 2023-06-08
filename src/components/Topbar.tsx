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
    <nav className={sidebarActive ? 'topbar-sb-active' : 'topbar'}>
      {sidebarActive ? (
        <TbX
          className='text-dark pointer'
          onClick={() => setSidebarActive(!sidebarActive)}
        />
      ) : (
          <TbMenu2
            className='text-dark pointer'
            onClick={() => setSidebarActive(!sidebarActive)}
          />
        )}
      <section>
        <div className='search-container'>
          <TbSearch className='text-primary' />
          <input type='text' placeholder='Search' />
        </div>
        <a>
          <FaGithubAlt className='text-primary pointer' />
        </a>
        <button className='pointer' onClick={toggleTheme}>
          <TbMoon />
        </button>
      </section>
    </nav>
  );
};

export default Topbar;


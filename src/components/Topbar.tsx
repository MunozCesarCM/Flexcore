import { TbSearch, TbMoon } from 'react-icons/tb';
import { FaGithubAlt } from 'react-icons/fa';
import { TbMenu2, TbX } from 'react-icons/tb';

interface Topbar {
  sidebarActive: boolean;
  setSidebarActive: any;
}

const Topbar = ({sidebarActive, setSidebarActive} : Topbar) => {
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
        <button className='pointer'>
          <TbMoon />
        </button>
      </section>
    </nav>
  );
};

export default Topbar;


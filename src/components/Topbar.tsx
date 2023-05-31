import { TbSearch, TbMoon } from 'react-icons/tb';
import { FaGithubAlt } from 'react-icons/fa';
import { TbX } from 'react-icons/tb';

const Topbar = () => {
  return (
    <nav className='topbar-sb-active'>
      <TbX />
      <section>
        <div>
          <TbSearch />
          <input type='text' placeholder='Search' />
        </div>
        <a>
          <FaGithubAlt />
        </a>
        <button>
          <TbMoon />
        </button>
      </section>
    </nav>
  );
};

export default Topbar;


import { TbSearch, TbMoon } from 'react-icons/tb';
import { FaGithubAlt } from 'react-icons/fa';

const Topbar = () => {
  return (
    <nav>
      <div className='input-icon'>
        <TbSearch className='icon' />
        <input type='text' placeholder='Search' />
      </div>
      <div className='buttons'>
      <button>
        <FaGithubAlt />
      </button>
      <button>
        <TbMoon />
      </button>
      </div>
    </nav>
  );
};

export default Topbar;

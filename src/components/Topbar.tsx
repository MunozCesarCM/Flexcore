import { TbSearch, TbMoon } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

const Topbar = () => {
  return (
    <nav>
      <span/>
      <div className='input-icon'>
        <TbSearch className='icon' />
        <input type='text' placeholder='Search . . .' />
      </div>
      <div className='buttons'>
      <button>
        <FaGithub />
      </button>
      <button>
        <TbMoon />
      </button>
      </div>
    </nav>
  );
};

export default Topbar;

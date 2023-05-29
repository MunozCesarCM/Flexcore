import { useState } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import { TbMenu2, TbX, TbSearch } from 'react-icons/tb';

const Home = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <main>
      <Topbar />
      <Sidebar sidebarActive={sidebarActive} />
      <article style={{marginLeft: (sidebarActive ? '300px' : '0'), marginRight: '0'}}>
        <div className='content'>
          <button className='sidebar-icon'>
            {sidebarActive ?
              (<TbX onClick={() => setSidebarActive(!sidebarActive)} />) :
              (<TbMenu2 onClick={() => setSidebarActive(!sidebarActive)} />)}
          </button>
          <section className='landing' style={{maxWidth: (sidebarActive ? 'calc(85vw - 300px)' : '75vw')}}>
          </section>
        </div>
      </article>
    </main>
  );
}

export default Home;

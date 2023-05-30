import { useState } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import {
  TbMenu2,
  TbX,
  TbCategory2,
  TbMoonStars,
  TbPalette,
  TbArrowAutofitWidth,
} from 'react-icons/tb';
import { RiArrowDropRightLine } from 'react-icons/ri';

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
          <section className='landing' style={{maxWidth: (sidebarActive ? 'calc(100vw - 300px)' : '100vw')}}>
            <header>
              <section className='hero'>
                <h1><span className='special'>Create</span> with Confidence using Intuitive <span className='special'>UI design.</span></h1>
                <p>Craft <strong>stunning interfaces</strong> by customizing components with ease, and see your vision come to life. With FleXkit's focus on practicality and <strong>seamless integration</strong>, you can <strong>effortlessly</strong> build responsive and visually appealing websites.</p>
                <button>
                  <span>Get Started</span>
                  <RiArrowDropRightLine />
                </button>
              </section>
              <section className='demo'>
                Demo
              </section>
            </header>
            <section className='features'>
              <div className='feature'>
                <TbCategory2 />
                <h2>Extensive Customization</h2>
              </div>
              <div className='feature'>
                <TbMoonStars />
                <h2>Built-in Dark Mode</h2>
              </div>
              <div className='feature'>
                <TbPalette />
                <h2>Effortless Theming</h2>
              </div>
              <div className='feature'>
                <TbArrowAutofitWidth />
                <h2>Responsive Design</h2>
              </div>
            </section>
            <section className='showcase'>
              DEMOS
            </section>
          </section>
        </div>
      </article>
    </main>
  );
}

export default Home;

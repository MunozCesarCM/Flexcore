import { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  TbCategory2,
  TbMoonStars,
  TbPalette,
  TbArrowAutofitWidth,
} from 'react-icons/tb';
import { RiArrowDropRightLine } from 'react-icons/ri';
import AppContext from '../context/AppContext';
import { formatCode } from '../helpers/formatCode';
import { example1 } from '../constants/demo';

const Home = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState('0px');
  const { sidebarActive, setSidebarActive, siteTheme } = useContext(AppContext);

  useEffect(() => {
    setSidebarActive(false);
  }, []);

  const onLoad = () => {
    if (ref.current !== null) {
      setHeight(ref.current.contentWindow.document.body.scrollHeight + 32 + 'px');
    }
  };

  return (
    <article  className='landing-page'>
      <section className='landing'>
        <header>
          <section className='hero'>
            <h1><span className='special'>Create</span> with Confidence using Intuitive <span className='special'>UI design.</span></h1>
            <p>Craft <strong>stunning interfaces</strong> by customizing components with ease, and see your vision come to life. With Flexcore's focus on practicality and <strong>seamless integration</strong>, you can <strong>effortlessly</strong> build responsive and visually appealing websites.</p>
            <div className='actions'>
              <Link to='/getting-started'>
                <button className='primary'>
                  <span>Get Started</span>
                  <RiArrowDropRightLine />
                </button>
              </Link>
              <Link to='/showcase/google'>
                <button className='secondary'>
                  <span>Showcase</span>
                </button>
              </Link>
            </div>
          </section>
          <section className='demo'>
            <iframe
              ref={ref}
              onLoad={onLoad}
              srcDoc={formatCode(example1, true, siteTheme, siteTheme, 'Poppins')}
              title='output'
              sandbox='allow-same-origin'
              frameBorder='0'
              style={{height: height, width: '55vw'}}
            />
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
    </article>
  );
}

export default Home;

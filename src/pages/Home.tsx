import { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropRightLine } from 'react-icons/ri';
import AppContext from '../context/AppContext';
import { formatCode } from '../helpers/formatCode';
import { example1 } from '../constants/demo';

const Home = () => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState('0px');
  const { setSidebarActive, siteTheme } = useContext(AppContext);

  useEffect(() => {
    setSidebarActive(false);
  }, [setSidebarActive]);

  const onLoad = () => {
    if (ref.current !== null && ref.current.contentWindow !== null) {
      setHeight(ref.current.contentWindow.document.body.scrollHeight + 32 + 'px');
    }
  };

  return (
    <article  className='landing-page h-screen min-h-screen flex items-center'>
      <header className='flex items-center'>
        <section className='hero flex flex-col justify-center gap-6'>
          <h1 className='text-7xl'><span className='text-primary'>Create</span> with Confidence using Intuitive <span className='text-primary'>UI design.</span></h1>
          <p className='line-height-1-75'>Craft <strong>stunning interfaces</strong> by customizing components with ease, and see your vision come to life. With Flexcore's focus on practicality and <strong>seamless integration</strong>, you can <strong>effortlessly</strong> build responsive and visually appealing websites.</p>
          <div className='flex items-center gap-4'>
            <Link to='/getting-started' onClick={() => {if(window.innerWidth > 768) setSidebarActive(true)}}>
              <button className='primary flex justify-between items-center bg-primary weight-600 text-lg letter-wide mr-auto py-3 px-4 border-none rounded cursor-pointer duration-200'>
                <span className='text-white'>Get Started</span>
                <RiArrowDropRightLine className='ml-2 mr-1 duration-100 text-2xl' />
              </button>
            </Link>
            <Link to='/showcase/google'>
              <button className='text-header hover:text-primary weight-600 text-md letter-wide mr-auto p-4 border-none rounded cursor-pointer duration-100'>
                <span>Showcase</span>
              </button>
            </Link>
          </div>
        </section>
        <section>
          <iframe
            ref={ref}
            onLoad={onLoad}
            srcDoc={formatCode(example1, true, siteTheme, siteTheme, 'Poppins')}
            title='output'
            sandbox='allow-same-origin'
            style={{height: height, width: '55vw', border: '1px solid var(--color-border)'}}
          />
        </section>
      </header>
    </article>
  );
}

export default Home;

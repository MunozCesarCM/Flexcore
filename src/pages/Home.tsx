import { useState, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import Sidebar from '../components/Sidebar';
import { TbArrowBigLeftLinesFilled, TbArrowBigRightLinesFilled } from 'react-icons/tb';
import {  FiMoreVertical, FiCopy, FiRotateCcw } from 'react-icons/fi';

const Home = () => {
  const sampleRef = useRef<null | HTMLDivElement>(null);

  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <main>
      <Sidebar
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />
      <article style={{marginLeft: (sidebarActive ? '300px' : '0')}}>
        <div className='content'>
          <button className='sidebar-icon'>
            {sidebarActive ?
              (<TbArrowBigLeftLinesFilled onClick={() => setSidebarActive(!sidebarActive)} />) :
              (<TbArrowBigRightLinesFilled onClick={() => setSidebarActive(!sidebarActive)} />)}
          </button>
          <section style={{maxWidth: (sidebarActive ? 'calc(100vw - 300px)' : '100vw')}}>
            <h2>Brutal Blend</h2>
          </section>
        </div>
        <div className='sidebar'>
          <h3>Contents</h3>

          <h4>Basic Button</h4>
          <h5>Text Button</h5>
          <h5>Contained Button</h5>
          <h5>Outlined Button</h5>

          <h4>Handling Clicks</h4>
          <h4>Color</h4>
          <h4>Sizes</h4>
          <h4>Buttons with Icons</h4>

          <h4>Icon Button</h4>
          <h5>Sizes</h5>
          <h5>Colors</h5>

          <h4 onClick={() => sampleRef.current?.scrollIntoView({behavior: 'smooth'})}>Customization</h4>
          <h4>Complex Button</h4>
        </div>
      </article>
    </main>
  );
}

export default Home;

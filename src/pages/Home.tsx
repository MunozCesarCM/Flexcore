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
      <article style={{marginLeft: (sidebarActive ? '300px' : '0'), marginRight: '0'}}>
        <div className='content'>
          <button className='sidebar-icon'>
            {sidebarActive ?
              (<TbArrowBigLeftLinesFilled onClick={() => setSidebarActive(!sidebarActive)} />) :
              (<TbArrowBigRightLinesFilled onClick={() => setSidebarActive(!sidebarActive)} />)}
          </button>
          <section className='landing' style={{maxWidth: (sidebarActive ? 'calc(85vw - 300px)' : '75vw')}}>
            <div className='hero'>
              <div className='heading'>
                <div className="container" style={{margin: '100px auto', maxWidth: '600px'}}>
                  <div className="card" style={{background: '#fff', borderRadius: '20px', filter: 'drop-shadow(8px 8px 0px #000)', padding: '20px', border: '4px solid #000'}}>
                    <h1 style={{margin: 0, fontSize: '42px', letterSpacing: '2px'}}>Brutal Blend</h1>
                    <p>Unleash Neubrutalism's Power in CSS. Create <strong>visually striking</strong>, minimalist web interfaces effortlessly.</p>
                    <div className="button-container" style={{textAlign: 'right'}}>
                      <button style={{margin: '0 5px', background: '#fff', fontSize: '18px', padding: '10px 15px', borderRadius: '6px', border: '3px solid #000', boxShadow: '5px 5px 0px 0px #000', cursor: 'pointer'}}>Cancel</button>
                      <button className="green" style={{margin: '0 5px', background: '#1565c0', fontSize: '18px', fontWeight: 'bold', padding: '10px 15px', borderRadius: '6px', border: '3px solid #000', boxShadow: '5px 5px 0px 0px #000', cursor: 'pointer', color: '#fff'}}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='code'>
                <div className='code-container'>
                  <ul>
                    <li><FiRotateCcw /></li>
                    <li><FiCopy /></li>
                    <li><FiMoreVertical /></li>
                  </ul>
                  <div className='code-example'>
                    <CodeMirror
                      value={`<div class="card">
  <h1>Brutal Blend</h1>
  <p>Unleash Neubrutalism's Power in CSS. Create visually striking, minimalist web interfaces effortlessly.</p>
  <div class="button-container">
    <button>Cancel</button>
    <button>Save</button>
  </div>
</div>`}
                      theme="dark"
                      extensions={html()}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p>Welcome to Brutal Blend, a powerful CSS framework designed to bring the raw aesthetics and minimalism of Neubrutalism to your web projects. Emphasizing simplicity, flexibility, and striking visual appeal, Brutal Blend empowers front-end developers and designers to create unique and captivating interfaces.</p>
            <p>With Brutal Blend, you can embrace the core principles of Neubrutalism and effortlessly craft minimalistic designs that make a bold impact. Whether you're building a personal portfolio, a corporate website, or an innovative web application, Brutal Blend provides the foundation for an exceptional user experience.</p>
            <ul>
              <li>Neubrutalism-Inspired Design Elements: Embrace the essence of Neubrutalism with Brutal Blend's design elements. From clean typography to balanced spacing, every aspect is meticulously crafted to evoke a raw, honest, and visually striking aesthetic.</li>
              <li>Light and Dark Mode Support: Enhance the user experience and accessibility of your web projects by seamlessly integrating light and dark mode options. With Brutal Blend, your designs adapt to the user's preference, ensuring optimal readability and visual comfort.</li>
              <li>Accessibility-Focused Design Principles: Accessibility is a fundamental aspect of Brutal Blend. The framework follows best practices to ensure inclusivity, such as proper color contrast, keyboard navigation support, and semantic HTML structure. Create interfaces that are accessible to all users.</li>
              <li>Semantic HTML Integration: Brutal Blend encourages the use of semantic HTML, emphasizing the importance of proper markup for enhanced accessibility, search engine optimization (SEO), and maintainability. The framework provides guidance and classes that align with semantic elements, making it easier to create well-structured and meaningful content.</li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}

export default Home;

import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { TbMenu2, TbX } from 'react-icons/tb';
import {  FiMoreVertical, FiCopy, FiRotateCcw } from 'react-icons/fi';

const Overview = () => {
  const [sidebarActive, setSidebarActive] = useState(true);

  const scrollPosition = (elementId: string) => {
    const element = document.getElementById(elementId);
    const position = element?.getBoundingClientRect().top;

    let offScrollPosition = 0;
    if (position !== undefined) {
      offScrollPosition = position + window.pageYOffset - 85;
    }

    window.scrollTo({
      top: offScrollPosition,
      behavior: 'smooth'
    });
  }

  return (
    <main>
      <Topbar />
      <Sidebar sidebarActive={sidebarActive} />
      <article style={{marginLeft: (sidebarActive ? '300px' : '0')}}>
        <div className='content'>
          <button className='sidebar-icon'>
            {sidebarActive ?
              (<TbX onClick={() => setSidebarActive(!sidebarActive)} />) :
              (<TbMenu2 onClick={() => setSidebarActive(!sidebarActive)} />)}
          </button>
          <section style={{maxWidth: (sidebarActive ? 'calc(100vw - 300px - 275px)' : '100vw')}}>
            <h2 id='Overview'>Overview</h2>
            <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
            <p>Buttons communicate <span className='quote'>actions</span> that users can take. They are typically placed throughout your UI, in places like:</p>
            <ul>
              <li>Modal Windows</li>
              <li>Forms</li>
              <li>Cards</li>
              <li>Toolbars</li>
            </ul>
            <h3>Basic button</h3>
            <p>The <span className='quote'>Button</span> comes with three variants: text (default), contained, and outlined.</p>
            <div className='code-result'>
              <button style={{margin: '0 1em', background: 'none', cursor: 'pointer', border: 'none', color: '#1565c0', padding: '0.75em 2em', borderRadius: '3px'}}>Text</button>
              <button style={{margin: '0 1em', background: '#1565c0', cursor: 'pointer', border: 'none', color: 'white', padding: '0.75em 2em', borderRadius: '3px'}}>Contained</button>
              <button style={{margin: '0 1em', background: 'none', border: '1px solid #1565c0', cursor: 'pointer', color: '#1565c0', padding: '0.75em 2em', borderRadius: '3px'}}>Outlined</button>
            </div>
            <div className='code-container'>
              <ul>
                <li><FiRotateCcw /></li>
                <li><FiCopy /></li>
                <li><FiMoreVertical /></li>
              </ul>
              <div className='code-example'>
                <CodeMirror
                  value={`<button variant="text">Text</button>
<button variant="contained">Contained</button>
<button variant="outlined">Outlined</button>`}
                  theme="dark"
                  extensions={html()}
                />
              </div>
            </div>
            <hr />
            <h4>Text Button</h4>
            <p><span className='underline'>Text buttons</span> are typically used for less-pronounced actions, including those located in:</p>
            <ul>
              <li>Dialogs</li>
              <li>Cards</li>
            </ul>
            <p>In cards, text buttons help maintain an emphasis on card content.</p>
            <div className='code-result'>
              <button style={{margin: '0 1em', background: '#1565c0', cursor: 'pointer', border: 'none', color: 'white', padding: '0.75em 2em', borderRadius: '3px'}}>One</button>
              <button style={{margin: '0 1em', background: '#1565c0', cursor: 'pointer', border: 'none', color: 'white', padding: '0.75em 2em', borderRadius: '3px'}}>Two</button>
              <button style={{margin: '0 1em', background: '#1565c0', cursor: 'pointer', border: 'none', color: 'white', padding: '0.75em 2em', borderRadius: '3px'}}>Three</button>
            </div>
            <div className='code-container'>
              <ul>
                <li><FiRotateCcw /></li>
                <li><FiCopy /></li>
                <li><FiMoreVertical /></li>
              </ul>
              <div className='code-example'>
                <CodeMirror
                  value={`<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
Link
</Button>`}
                  theme="dark"
                  extensions={html()}
                />
              </div>
            </div>
            <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
            <p>Buttons communicate <span className='quote'>actions</span> that users can take. They are typically placed throughout your UI, in places like:</p>
            <ul>
              <li>Modal Windows</li>
              <li>Forms</li>
              <li>Cards</li>
              <li>Toolbars</li>
            </ul>
            <h3 id="Customization">Customization</h3>
            <p>The <span className='quote'>Button</span> comes with three variants: text (default), contained, and outlined.</p>
            <div className='code-result'>
              <button style={{margin: '0 1em', background: 'none', cursor: 'pointer', border: 'none', color: '#1565c0', padding: '0.75em 2em', borderRadius: '3px'}}>Text</button>
              <button style={{margin: '0 1em', background: '#1565c0', cursor: 'pointer', border: 'none', color: 'white', padding: '0.75em 2em', borderRadius: '3px'}}>Contained</button>
              <button style={{margin: '0 1em', background: 'none', border: '1px solid #1565c0', cursor: 'pointer', color: '#1565c0', padding: '0.75em 2em', borderRadius: '3px'}}>Outlined</button>
            </div>
            <div className='code-container'>
              <ul>
                <li><FiRotateCcw /></li>
                <li><FiCopy /></li>
                <li><FiMoreVertical /></li>
              </ul>
              <div className='code-example'>
                <CodeMirror
                  value={`<button variant="text">Text</button>
<button variant="contained">Contained</button>
<button variant="outlined">Outlined</button>`}
                  theme="dark"
                  extensions={html()}
                />
              </div>
            </div>
            <hr />
            <h4>Text Button</h4>
            <p><span className='underline'>Text buttons</span> are typically used for less-pronounced actions, including those located in:</p>
            <ul>
              <li>Dialogs</li>
              <li>Cards</li>
            </ul>
            <p>In cards, text buttons help maintain an emphasis on card content.</p>
            <div className='code-result'>
              <button style={{margin: '0 1em', background: '#1565c0', cursor: 'pointer', border: 'none', color: 'white', padding: '0.75em 2em', borderRadius: '3px'}}>One</button>
              <button style={{margin: '0 1em', background: '#1565c0', cursor: 'pointer', border: 'none', color: 'white', padding: '0.75em 2em', borderRadius: '3px'}}>Two</button>
              <button style={{margin: '0 1em', background: '#1565c0', cursor: 'pointer', border: 'none', color: 'white', padding: '0.75em 2em', borderRadius: '3px'}}>Three</button>
            </div>
            <div className='code-container'>
              <ul>
                <li><FiRotateCcw /></li>
                <li><FiCopy /></li>
                <li><FiMoreVertical /></li>
              </ul>
              <div className='code-example'>
                <CodeMirror
                  value={`<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
Link
</Button>`}
                  theme="dark"
                  extensions={html()}
                />
              </div>
            </div>
          </section>
        </div>
        <div className='sidebar'>
          <h3>Contents</h3>

          <h4 onClick={() => scrollPosition('Overview')}>Overview</h4>
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

          <h4 onClick={() => scrollPosition('Customization')}>Customization</h4>
          <h4>Complex Button</h4>
        </div>
      </article>
    </main>
  );
}

export default Overview;

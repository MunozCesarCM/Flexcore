import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FiCopy } from 'react-icons/fi';
import AppContext from '../context/AppContext';
import '../styles/toast.scss';

const GettingStarted = () => {
  const { sidebarActive, setSidebarActive, siteTheme } = useContext(AppContext);
  const notify = () => toast.success('Text Copied to Clipboard!');

  const scrollPosition = (elementId: string) => {
    const element = document.getElementById(elementId);
    const position = element?.getBoundingClientRect().top;

    let offScrollPosition = 0;
    if (position !== undefined) {
      offScrollPosition = position + window.scrollY - 85;
    }

    window.scrollTo({
      top: offScrollPosition,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    if (sidebarActive === null) setSidebarActive(true);
  }, [sidebarActive, setSidebarActive]);

  return (
    <article className={ sidebarActive ? 'article-content-sb-active' : 'article-content'}>
      <section>
        <h2 id='GettingStarted'>Welcome to the <span className='text-primary'>Flexcore</span> Documentation!</h2>
        <p>Flexcore is a powerful and feature-rich <strong>UI framework</strong> designed to simplify the process of building stunning and responsive web interfaces. With its extensive set of utilities, Flexcore offers a flexible and efficient solution for building web applications of any scale or complexity.</p>

        <h3 id='Key Features'>Key Features:</h3>
        <ul>
          <li><strong>Utility-First:</strong> Flexcore provides an extensive collection of utility classes that you can use to style your elements. These classes cover a wide range of properties like spacing, typography, colors, flexbox, and more, giving you <strong>granular control</strong> over the appearance of your UI.</li>
          <li><strong>Customization:</strong> You can configure the framework's colors to match your project's design system. This flexibility allows you to create unique and consistent designs.</li>
          <li><strong>Responsive Design:</strong> Flexcore includes responsive utility prefixes, allowing you to create <strong>responsive layouts</strong> and adapt your design to different screen sizes. With classes like <mark>sm</mark>, <mark>md</mark>, <mark>lg</mark>, and <mark>xl</mark>, you can easily customize styles based on breakpoints.</li>
        </ul>

        <h3 id='Installation'>Installation</h3>
        <p>To get started with Flexcore, you have multiple options for installation:</p>
        <ul>
          <li>
            <strong>Via CDN:</strong>
            <p>To quickly get started with Flexcore, you can include the framework via a Content Delivery Network (CDN). Add the following <mark>link</mark> tag in the <mark>head</mark> section of your HTML file:</p>
            <code
              className='bg-neutral-50 dark:bg-slate-900'
              onClick={() => {
                navigator.clipboard.writeText('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/munozcesarcm/flexcore/public/flexcore.css" />');
                notify();
              }}
            >
              <FiCopy />&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/munozcesarcm/flexcore/public/flexcore.css" /&gt;
            </code>
            <p>This link will fetch the minified CSS file from the Flexcore CDN and apply the framework's utility classes to your project.</p>
          </li>
          <li>
            <strong>Via npm (Node.js):</strong>
            <p>If you prefer managing dependencies through npm, install Flexcore as a development dependency:</p>
            <code
              className='bg-neutral-50 dark:bg-slate-900'
              onClick={() => {
                navigator.clipboard.writeText('npm install flexcore');
                notify();
              }}
            >
              <FiCopy />npm install flexcore
            </code>
          </li>
          <li>
            <strong>Via yarn:</strong>
            <p>Run the following command to install Flexcore as a development dependency using yarn:</p>
            <code
              className='bg-neutral-50 dark:bg-slate-900'
              onClick={() => {
                navigator.clipboard.writeText('yarn add flexcore');
                notify();
              }}
            >
              <FiCopy />yarn add flexcore
            </code>
          </li>
        </ul>
        <footer>
          <span />
          <Link to='/typography/color-and-styling'>Color and Styling</Link>
        </footer>
      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('Getting Started')}>Getting Started</h4>
        <h4 onClick={() => scrollPosition('Key Features')}>Key Features</h4>
        <h4 onClick={() => scrollPosition('Installation')}>Installation</h4>
      </div>

      <ToastContainer position="bottom-right"
        autoClose={1250}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme={ siteTheme === 'light' ? 'light' : 'dark' }
      />
    </article>
  );
}

export default GettingStarted;

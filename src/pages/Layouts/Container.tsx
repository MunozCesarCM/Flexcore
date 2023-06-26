import { useEffect, useContext } from 'react';
import CodeExample from '../../components/CodeExample';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  example3,
  example4,
} from '../../constants/layouts/container';

const Flexbox = () => {
  const { sidebarActive, setSidebarActive } = useContext(AppContext);

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

  useEffect(() => {
    if (sidebarActive === null) setSidebarActive(true);
  }, [sidebarActive, setSidebarActive]);

  return (
    <article className={ sidebarActive ? 'article-content-sb-active' : 'article-content'}>
      <section>
        <h2>Container</h2>

        <h3 id='Heroes'>Heroes</h3>
        <p>Heroes are a prominent and visually appealing section that grabs the user's attention and delivers a powerful message or showcases important content:</p>
        <CodeExample snippet={example1} />
        <CodeExample snippet={example2} />

        <h3 id='Headers'>Headers</h3>
        <p>The Headers section is an important component located at the top of a website. It serves as a navigation and branding hub, providing users with quick access to essential information and enabling seamless navigation throughout the site.</p>

        <h4 id='Simple Header'>Simple Header</h4>
        <p>A simple header design offers a clean and minimalistic approach, focusing on essential elements to ensure a straightforward user experience:</p>
        <CodeExample snippet={example3} />

        <h4 id='E-Commerce Header'>E-Commerce Header</h4>
        <p>An ecommerce header requires additional elements to accommodate the unique needs of an online store:</p>
        <CodeExample snippet={example4} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Container</h4>
        <h4 onClick={() => scrollPosition('Heroes')}>Heroes</h4>
        <h4 onClick={() => scrollPosition('Headers')}>Headers</h4>
        <h5 onClick={() => scrollPosition('Simple Header')}>Simple Header</h5>
        <h5 onClick={() => scrollPosition('ECommerce Header')}>E-Commerce Header</h5>
        <h4 onClick={() => scrollPosition('Footer')}>Footer</h4>
      </div>
    </article>
  );
}

export default Flexbox;


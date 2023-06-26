import { useEffect, useContext } from 'react';
import CodeExample from '../../components/CodeExample';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  example3,
} from '../../constants/showcase/google';

const Google = () => {
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
        <h2>Google</h2>

        <h3 id='Search'>Search</h3>
        <CodeExample snippet={example1} font='Helvetica' />

        <h3 id='Results'>Results</h3>
        <CodeExample snippet={example2} font='Helvetica' />

        <h3 id='Drive'>Drive</h3>
        <CodeExample snippet={example3} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Google</h4>
        <h4 onClick={() => scrollPosition('Search')}>Search</h4>
        <h4 onClick={() => scrollPosition('Results')}>Results</h4>
        <h4 onClick={() => scrollPosition('Drive')}>Drive</h4>
      </div>
    </article>
  );
}

export default Google;

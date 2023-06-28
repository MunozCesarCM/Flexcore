import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CodeExample from '../../components/CodeExample';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
} from '../../constants/showcase/twitter';

const Twitter = () => {
  const { sidebarActive } = useContext(AppContext);

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

  return (
    <article className={ sidebarActive ? 'article-content-sb-active' : 'article-content'}>
      <h2>Twitter</h2>

      <h3 id='Profile'>Profile</h3>
      <CodeExample snippet={example1} />

      <h3 id='Feed'>Feed</h3>
      <CodeExample snippet={example2} />

      <footer>
        <Link to='/showcase/google'>Google</Link>
        <Link to='/forms-and-inputs/buttons'>Buttons</Link>
      </footer>

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Twitter</h4>
        <h4 onClick={() => scrollPosition('Profile')}>Profile</h4>
        <h4 onClick={() => scrollPosition('Feed')}>Feed</h4>
      </div>
    </article>
  );
}

export default Twitter;

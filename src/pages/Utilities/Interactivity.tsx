import { useEffect, useContext } from 'react';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  table1,
  table2,
} from '../../constants/utilities/interactivity';

const Interactivity = () => {
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
  }, []);

  return (
    <article  className={ sidebarActive ? 'article-content-sb-active' : 'article-content'}>
      <section style={{maxWidth: (sidebarActive ? 'calc(100vw - 300px - 275px)' : '100vw')}}>
        <h2>Interactivity</h2>
        <p>FleXkit provides utility classes to enhance the interactivity of your web interfaces. These classes allow you to modify various interactive aspects of elements to create engaging user experiences.</p>

        <h3 id='Cursor'>Cursor</h3>
        <p>The <span className='quote'>cursor</span> utility classes enable you to change the appearance of the cursor when hovering over elements:</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h3 id='User Select'>User Select</h3>
        <p>The <span className='quote'>user-select</span> utility class allows you to control the selection behavior of text within an element:</p>
        <ClassTable tableItems={table2} />
        <CodeExample snippet={example2} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Interactivity</h4>
        <h4 onClick={() => scrollPosition('Cursor')}>Cursor</h4>
        <h4 onClick={() => scrollPosition('User Select')}>User Select</h4>
        <h4 onClick={() => scrollPosition('States')}>States</h4>
        <h5 onClick={() => scrollPosition('Hover')}>Hover</h5>
        <h5 onClick={() => scrollPosition('Active')}>Active</h5>
        <h5 onClick={() => scrollPosition('Focus')}>Focus</h5>
        <h5 onClick={() => scrollPosition('Target')}>Target</h5>
      </div>
    </article>
  );
}

export default Interactivity;

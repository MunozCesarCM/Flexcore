import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  table1,
  table2,
  table3,
  table4,
  table5,
  table6,
} from '../../constants/utilities/sizing';

const Sizing = () => {
  const { sidebarActive, setSidebarActive } = useContext(AppContext);

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
      <h2>Sizing</h2>
      <p>The Flexcore utility classes provide convenient ways to modify the sizing of elements within your interface. These classes allow you to control the <mark>width</mark>, <mark>height</mark>, <mark>min-width</mark>, <mark>min-height</mark>, <mark>max-width</mark> and <mark>max-height</mark> of elements, giving you precise control over the dimensions of your UI components.</p>

      <h3 id='Width'>Width</h3>
      <p>To modify the <mark>width</mark> of an element, you can use the following utility classes:</p>
      <ClassTable tableItems={table1} />
      <CodeExample snippet={example1} />

      <h4 id='Min Width'>Min Width</h4>
      <p>To specify a <mark>min-width</mark> for an element, you can utilize the following utility classes:</p>
      <ClassTable tableItems={table2} />

      <h4 id='Max Width'>Max Width</h4>
      <p>To define a <mark>max-width</mark> for an element, you can utilize the following utility classes:</p>
      <ClassTable tableItems={table3} />

      <h3 id='Height'>Height</h3>
      <p>To modify the <mark>height</mark> of an element, you can use the following utility classes:</p>
      <ClassTable tableItems={table4} />
      <CodeExample snippet={example2} />

      <h4 id='Min Height'>Min Height</h4>
      <p>To specify a <mark>min-height</mark> for an element, you can utilize the following utility classes:</p>
      <ClassTable tableItems={table5} />

      <h4 id='Max Height'>Max Height</h4>
      <p>To define a <mark>max-height</mark> for an element, you can utilize the following utility classes:</p>
      <ClassTable tableItems={table6} />

      <footer>
        <Link to='/utilities/borders'>Borders</Link>
        <Link to='/utilities/layout'>Layout</Link>
      </footer>

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Sizing</h4>
        <h4 onClick={() => scrollPosition('Width')}>Width</h4>
        <h5 onClick={() => scrollPosition('Min Width')}>Min Width</h5>
        <h5 onClick={() => scrollPosition('Max Width')}>Max Width</h5>
        <h4 onClick={() => scrollPosition('Height')}>Height</h4>
        <h5 onClick={() => scrollPosition('Min Height')}>Min Height</h5>
        <h5 onClick={() => scrollPosition('Max Height')}>Max Height</h5>
      </div>
    </article>
  );
}

export default Sizing;

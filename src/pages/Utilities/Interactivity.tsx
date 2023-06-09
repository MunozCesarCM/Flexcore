import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  example3,
  example4,
  example5,
  table2,
  table3,
} from '../../constants/utilities/interactivity';

const Interactivity = () => {
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
    <article  className={ sidebarActive ? 'article-content-sb-active' : 'article-content'}>
      <h2>Interactivity</h2>
      <p>Flexcore provides utility classes to modify various interactive aspects of elements to create engaging user experiences.</p>

      <h4 id='Transition Duration'>Transition Duration</h4>
      <p>Flexcore has utility classes to define the duration of CSS transitions, allowing you to control the speed of animations and smooth transitions between different states:</p>
      <ClassTable tableItems={table3} />

      <h3 id='States'>States</h3>
      <p>To apply specific styles to elements based on their current state or interaction. These classes allow you to enhance the user experience by visually indicating different states or actions.</p>

      <h4 id='Hover'>Hover</h4>
      <p>The <mark>hover</mark> pseudo-class is used to apply styles when an element is being hovered over by the cursor. It enables you to add visual effects or highlight elements to provide feedback to users.</p>
      <p>You can combine the <mark>hover</mark> pseudo-class with any existing utility class by using the syntax <mark>hover:class-name</mark>. This allows you to apply the utility class specifically when the element is being hovered.</p>
      <CodeExample snippet={example3} />

      <h4 id='Active'>Active</h4>
      <p>The <mark>active</mark> pseudo-class is used to apply styles when an element is being actively interacted with, such as when it is being clicked or tapped. It allows you to provide visual feedback to indicate the element is being pressed.</p>
      <CodeExample snippet={example4} />

      <h4 id='Focus'>Focus</h4>
      <p>The <mark>active</mark> pseudo-class is used to apply styles when an element is being actively interacted with, such as when it is being clicked or tapped. It allows you to provide visual feedback to indicate the element is being pressed.</p>
      <CodeExample snippet={example5} />

      <h3 id='Cursor'>Cursor</h3>
      <p>The <mark>focus</mark> pseudo-class is used to apply styles when an element gains focus.</p>
      <CodeExample snippet={example1} />

      <h3 id='User Select'>User Select</h3>
      <p>The <mark>user-select</mark> utility class allows you to control the selection behavior of text within an element:</p>
      <ClassTable tableItems={table2} />
      <CodeExample snippet={example2} />

      <footer>
        <Link to='/utilities/spacing'>Spacing</Link>
        <span />
      </footer>

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Interactivity</h4>
        <h5 onClick={() => scrollPosition('Transition Duration')}>Transition Duration</h5>
        <h4 onClick={() => scrollPosition('States')}>States</h4>
        <h5 onClick={() => scrollPosition('Hover')}>Hover</h5>
        <h5 onClick={() => scrollPosition('Active')}>Active</h5>
        <h5 onClick={() => scrollPosition('Focus')}>Focus</h5>
        <h4 onClick={() => scrollPosition('Cursor')}>Cursor</h4>
        <h4 onClick={() => scrollPosition('User Select')}>User Select</h4>
      </div>
    </article>
  );
}

export default Interactivity;

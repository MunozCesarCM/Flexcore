import { useEffect, useContext } from 'react';
import { TbInfoCircle } from 'react-icons/tb';
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
} from '../../constants/utilities/spacing';

const Spacing = () => {
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
      <section>
        <h2>Spacing</h2>
        <p>The Flexcore utility classes provide flexible options for managing spacing within your interface. These classes allow you to easily apply <mark>padding</mark>, <mark>margin</mark>, and <mark>space between</mark> elements to achieve the desired layout and spacing.</p>

        <h3 id='Padding'>Padding</h3>
        <p>Padding is the space between the content of an element and its borders. Flexcore offers utility classes to set <mark>padding</mark> values:</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Directional Padding'>Directional Padding</h4>
        <p>Directional padding allows you to set <mark>padding</mark> values specifically for horizontal or vertical directions. Flexcore provides utility classes to conveniently apply horizontal or vertical padding to an element:</p>
        <ClassTable tableItems={table2} />

        <h4 id='Specific Padding'>Specific Padding</h4>
        <p>Flexcore also provides utility classes to apply <mark>padding</mark> in specific directions:</p>
        <ClassTable tableItems={table3} />
        <section className='notification-container-info'>
          <TbInfoCircle />
          <span className='quote-text'>
            To set padding in a specific direction and size, use the class naming convention p[direction]-[size]. Replace [direction] with t, r, b, or l, and [size] with a number from 0 to 100.
          </span>
        </section>

        <h3 id='Margin'>Margin</h3>
        <p><mark>margin</mark> is the space outside an element, creating gaps between elements. Flexcore offers utility classes to set <mark>margin</mark> values:</p>
        <ClassTable tableItems={table4} />
        <CodeExample snippet={example2} />

        <h4 id='Directional Margin'>Directional Margin</h4>
        <p>Flexcore also provides utility classes to apply <mark>margin</mark> in specific directions:</p>
        <ClassTable tableItems={table5} />

        <h4 id='Specific Margin'>Specific Margin</h4>
        <p>For precise control over individual sides of an element's <mark>margin</mark>, you can use the following utility classes:</p>
        <ClassTable tableItems={table6} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Spacing</h4>
        <h4 onClick={() => scrollPosition('Padding')}>Padding</h4>
        <h5 onClick={() => scrollPosition('Directional Padding')}>Directional Padding</h5>
        <h5 onClick={() => scrollPosition('Specific Padding')}>Specific Padding</h5>
        <h4 onClick={() => scrollPosition('Margin')}>Margin</h4>
        <h5 onClick={() => scrollPosition('Directional Margin')}>Directional Margin</h5>
        <h5 onClick={() => scrollPosition('Specific Margin')}>Specific Margin</h5>
      </div>
    </article>
  );
}

export default Spacing;

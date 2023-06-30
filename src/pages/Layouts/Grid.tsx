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
  table1,
  table2,
  table3,
  table4,
} from '../../constants/layouts/grid';

const Grid = () => {
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
      <h2>Grid</h2>
      <p>The Grid module in Flexcore allows you to define the structure and alignment of grid items in a highly customizable manner. Here are some key properties and concepts related to grid layout:</p>

      <h3 id='Template Columns'>Template Columns</h3>
      <p>The <mark>grid-cols</mark> property allows you to define the width and behavior of columns in the grid.</p>
      <ClassTable tableItems={table1} />
      <CodeExample snippet={example1} />

      <h3 id='Grid Placement'>Grid Placement</h3>
      <p>These properties allow you to control the placement and spanning of <mark>grid</mark> items acrolls columns. By specifying <mark>span</mark>, <mark>start</mark> or <mark>end</mark>, you can define how many columns an item should occupy.</p>

      <h4 id='Grid Span'>Grid Span</h4>
      <p><mark>grid-column</mark> is used to specify the placement and spanning of grid items across columns. By setting the column span, you can define how many columns it should occupy:</p>
      <ClassTable tableItems={table2} />
      <CodeExample snippet={example2} />

      <h4 id='Grid Start End'>Grid Start / End</h4>
      <p>The <mark>grid-column-start</mark> and <mark>grid-column-end</mark> properties define the starting and ending position of grid items within a grid column:</p>
      <ClassTable tableItems={table3} />
      <CodeExample snippet={example3} />

      <h4 id='Grid End'>Grid End</h4>
      <p>The <mark>grid-column-end</mark> property defines the ending position of a grid item within a grid column. It specifies the column line at which the grid item should end.</p>
      <ClassTable tableItems={table4} />
      <CodeExample snippet={example4} />

      <footer>
        <Link to='/layouts/container'>Container</Link>
        <Link to='/layouts/flexbox'>Flexbox</Link>
      </footer>

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Grid</h4>
        <h4 onClick={() => scrollPosition('Template Columns')}>Template Columns</h4>
        <h4 onClick={() => scrollPosition('Grid Placement')}>Grid Placement</h4>
        <h5 onClick={() => scrollPosition('Grid Span')}>Grid Span</h5>
        <h5 onClick={() => scrollPosition('Grid Start End')}>Grid Start / End</h5>
      </div>
    </article>
  );
}

export default Grid;

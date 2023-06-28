import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  example3,
  table1,
  table2,
  table3,
  table4,
  table5,
  table6,
  table7,
  table8,
} from '../../constants/utilities/layout';

const Layout = () => {
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
      <h2>Layout</h2>
      <p>The Flexcore utility classes provide a range of options to control the layout and positioning of elements within your interface. These classes allow you to adjust properties such as <mark>box-sizing</mark>, <mark>display</mark>, <mark>float</mark>, <mark>overflow</mark>, <mark>position</mark>, <mark>visibility</mark>, and <mark>z-index</mark>.</p>

      <h3 id='Box Sizing'>Box Sizing</h3>
      <p>The <mark>box-sizing</mark> property determines how the <mark>width</mark> and <mark>height</mark> of an element are calculated, including <mark>padding</mark> and <mark>border</mark>:</p>
      <ClassTable tableItems={table1} />

      <h3 id='Display'>Display</h3>
      <p>The <mark>display</mark> property controls how an element is rendered in the document flow:</p>
      <ClassTable tableItems={table2} />

      <h3 id='Float'>Float</h3>
      <p>The <mark>float</mark> property allows elements to be positioned to the left or right of their containers:</p>
      <ClassTable tableItems={table3} />

      <h3 id='Overflow'>Overflow</h3>
      <p>The <mark>overflow</mark> property determines how content that exceeds the dimensions of an element is handled:</p>
      <ClassTable tableItems={table4} />

      <h3 id='Position'>Position</h3>
      <p>The <mark>position</mark> property determines the positioning method of an element. Flexcore provides the following utility classes:</p>
      <ClassTable tableItems={table5} />

      <h4 id='TRBL'>Top Right Bottom Left</h4>
      <p>When using the <mark>position</mark> property, Flexcore provides utility classes to specify the distance from the <mark>top</mark>, <mark>right</mark>, <mark>bottom</mark>, or <mark>left</mark> edges of an element's positioned container:</p>
      <ClassTable tableItems={table6} />
      <CodeExample snippet={example1} />

      <h3 id='Visibility'>Visibility</h3>
      <p>The <mark>position</mark> property determines whether an element is <mark>visible</mark> or <mark>hidden</mark>:</p>
      <ClassTable tableItems={table7} />
      <CodeExample snippet={example2} />

      <h3 id='Z-Index'>Z-Index</h3>
      <p>The <mark>z-index</mark> property controls the stacking order of positioned elements. Flexcore provides utility classes to easily assign a specific <mark>z-index</mark> value to an element:</p>
      <ClassTable tableItems={table8} />
      <CodeExample snippet={example3} />

      <footer>
        <Link to='/utilities/sizing'>Sizing</Link>
        <Link to='/utilities/spacing'>Spacing</Link>
      </footer>

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Layout</h4>
        <h4 onClick={() => scrollPosition('Box Sizing')}>Box Sizing</h4>
        <h4 onClick={() => scrollPosition('Display')}>Display</h4>
        <h4 onClick={() => scrollPosition('Float')}>Float</h4>
        <h4 onClick={() => scrollPosition('Overflow')}>Overflow</h4>
        <h4 onClick={() => scrollPosition('Position')}>Position</h4>
        <h5 onClick={() => scrollPosition('TRBL')}>TRBL</h5>
        <h4 onClick={() => scrollPosition('Visibility')}>Visibility</h4>
        <h4 onClick={() => scrollPosition('Z-Index')}>Z-Index</h4>
      </div>
    </article>
  );
}

export default Layout;

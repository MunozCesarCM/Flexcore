import { useEffect, useContext } from 'react';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import AppContext from '../../context/AppContext';
import {
  example1,
  table1,
  table2,
  table3,
  table4,
  table5,
} from '../../constants/utilities/layout';

const Layout = () => {
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
    <article className={ sidebarActive ? 'article-content-sb-active' : 'article-content'}>
      <section style={{maxWidth: (sidebarActive ? 'calc(100vw - 300px - 275px)' : '100vw')}}>
        <h2>Layout</h2>
        <p>The FleXkit utility classes provide a range of options to control the layout and positioning of elements within your interface. These classes allow you to adjust properties such as <span className='quote'>box-sizing</span>, <span className='quote'>display</span>, <span className='quote'>float</span>, <span className='quote'>overflow</span>, <span className='quote'>position</span>, <span className='quote'>visibility</span>, and <span className='quote'>z-index</span>, providing you with flexible control over the layout of your UI components.</p>

        <h3 id='Box Sizing'>Box Sizing</h3>
        <p>The <span className='quote'>box-sizing</span> property determines how the <span className='quote'>width</span> and <span className='quote'>height</span> of an element are calculated, including <span className='quote'>padding</span> and <span className='quote'>border</span>. FleXkit offers the following utility classes:</p>
        <ClassTable tableItems={table1} />

        <h3 id='Display'>Display</h3>
        <p>The <span className='quote'>display</span> property controls how an element is rendered in the document flow. FleXkit provides the following utility classes:</p>
        <ClassTable tableItems={table2} />

        <h3 id='Float'>Float</h3>
        <p>The <span className='quote'>float</span> property allows elements to be positioned to the left or right of their containers. FleXkit provides the following utility classes:</p>
        <ClassTable tableItems={table3} />

        <h3 id='Overflow'>Overflow</h3>
        <p>The <span className='quote'>overflow</span> property determines how content that exceeds the dimensions of an element is handled. FleXkit offers the following utility classes:</p>
        <ClassTable tableItems={table4} />

        <h3 id='Position'>Position</h3>
        <p>The <span className='quote'>position</span> property determines the positioning method of an element. FleXkit provides the following utility classes:</p>
        <ClassTable tableItems={table5} />

        <h4 id='TRBL'>Top Right Bottom Left</h4>
        <p>When using the <span className='quote'>position</span> property, FleXkit provides utility classes to specify the distance from the <span className='quote'>top</span>, <span className='quote'>right</span>, <span className='quote'>bottom</span>, or <span className='quote'>left</span> edges of an element's positioned container:</p>
        <ClassTable tableItems={table4} />
        <CodeExample snippet={example1} />

      </section>
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

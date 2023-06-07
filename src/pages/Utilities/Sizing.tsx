import { useEffect, useContext } from 'react';
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
        <h2>Sizing</h2>
        <p>The FleXkit utility classes provide convenient ways to modify the sizing of elements within your interface. These classes allow you to control the <span className='quote'>width</span>, <span className='quote'>height</span>, <span className='quote'>min-width</span>, <span className='quote'>min-height</span>, <span className='quote'>max-width</span> and <span className='quote'>max-height</span> of elements, giving you precise control over the dimensions of your UI components.</p>

        <h3 id='Width'>Width</h3>
        <p>To modify the <span className='quote'>width</span> of an element, you can use the following utility classes:</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Min Width'>Min Width</h4>
        <p>To specify a <span className='quote'>min-width</span> for an element, you can utilize the following utility classes:</p>
        <ClassTable tableItems={table2} />

        <h4 id='Max Width'>Max Width</h4>
        <p>To define a <span className='quote'>max-width</span> for an element, you can utilize the following utility classes:</p>
        <ClassTable tableItems={table3} />

        <h3 id='Height'>Height</h3>
        <p>To modify the <span className='quote'>height</span> of an element, you can use the following utility classes:</p>
        <ClassTable tableItems={table4} />
        <CodeExample snippet={example2} />

        <h4 id='Min Height'>Min Height</h4>
        <p>To specify a <span className='quote'>min-height</span> for an element, you can utilize the following utility classes:</p>
        <ClassTable tableItems={table5} />

        <h4 id='Max Height'>Max Height</h4>
        <p>To define a <span className='quote'>max-height</span> for an element, you can utilize the following utility classes:</p>
        <ClassTable tableItems={table6} />

      </section>
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

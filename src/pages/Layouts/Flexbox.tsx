import { useEffect, useContext } from 'react';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  table1,
  table2,
  table3,
  table4,
  table5,
  table6,
  table7,
  table8,
} from '../../constants/layouts/flexbox';

const Flexbox = () => {
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
        <h2>Flexbox</h2>
        <p>Flexbox is a powerful layout system that allows you to arrange and align elements within a container, creating dynamic and adaptable designs.</p>

        <h3 id='Flex'>Flex</h3>
        <p>FleXkit offers a range of properties to control various aspects of <mark>flexbox</mark>, allowing you to achieve the desired layout and alignment for your interface.</p>

        <h4 id='Flex Basis'>Flex Basis</h4>
        <p><mark>flex-basis</mark> determines the initial size of flex items along the main axis before any remaining space is distributed. It specifies the default size of flex items when there is no <mark>flex-grow</mark> or <mark>flex-shrink</mark> value applied.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Flex Direction'>Flex Direction</h4>
        <p><mark>flex-direction</mark> defines the direction of the main axis and the cross axis in a flex container. It allows you to arrange flex items either horizontally or vertically.</p>
        <ClassTable tableItems={table2} />
        <CodeExample snippet={example2} />

        <h4 id='Flex Wrap'>Flex Wrap</h4>
        <p><mark>flex-wrap</mark> controls how flex items are wrapped within a flex container when they cannot fit in a single line. It specifies whether flex items should wrap onto multiple lines or stay within a single line.</p>
        <ClassTable tableItems={table3} />
        <CodeExample snippet={example3} />

        <h4 id='Flex Grow Shrink'>Flex Grow / Shrink</h4>
        <p><mark>flex-grow</mark> and <mark>flex-shrink</mark> determine how flex occupy available space along the main axis when there is extra space in the flex container.</p>
        <ClassTable tableItems={table4} />
        <CodeExample snippet={example4} />

        <h4 id='Gap'>Gap</h4>
        <p><mark>gap</mark> sets the spacing between flex items within a flex container.</p>
        <ClassTable tableItems={table5} />
        <CodeExample snippet={example5} />

        <h3 id='Justify Content'>Justify Content</h3>
        <p><mark>justify-content</mark> distributes the remaining space or adjusts the size of flex items to create visual balance.</p>
        <ClassTable tableItems={table6} />
        <CodeExample snippet={example6} />

        <h3 id='Align'>Align</h3>
        <p>FleXkit offers a set of properties to control the alignment of flex items along the cross axis of a flex container.</p>

        <h4 id='Align Items'>Align Items</h4>
        <p><mark>align-items</mark> allows you to position flex items at the start, end, center, stretch, or baseline within the container.</p>
        <ClassTable tableItems={table7} />
        <CodeExample snippet={example7} />

        <h4 id='Align Self'>Align Self</h4>
        <p><mark>align-self</mark> allows you to override the default alignment set by the parent container.</p>
        <ClassTable tableItems={table8} />
        <CodeExample snippet={example8} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Flexbox</h4>
        <h4 onClick={() => scrollPosition('Flex')}>Flex</h4>
        <h5 onClick={() => scrollPosition('Flex Basis')}>Flex Basis</h5>
        <h5 onClick={() => scrollPosition('Flex Direction')}>Flex Direction</h5>
        <h5 onClick={() => scrollPosition('Flex Wrap')}>Flex Wrap</h5>
        <h5 onClick={() => scrollPosition('Flex Grow Shrink')}>Flex Grow / Shrink</h5>
        <h5 onClick={() => scrollPosition('Gap')}>Gap</h5>
        <h4 onClick={() => scrollPosition('Justify Content')}>Justify Content</h4>
        <h4 onClick={() => scrollPosition('Align')}>Align</h4>
        <h5 onClick={() => scrollPosition('Align Items')}>Align Items</h5>
        <h5 onClick={() => scrollPosition('Align Self')}>Align Self</h5>
      </div>
    </article>
  );
}

export default Flexbox;


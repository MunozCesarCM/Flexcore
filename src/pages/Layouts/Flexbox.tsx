import { useEffect, useContext } from 'react';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  table1,
  table2,
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
        <p>FleXkit offers a range of properties to control various aspects of <span className='quote'>flexbox</span>, allowing you to achieve the desired layout and alignment for your interface.</p>

        <h4 id='Flex Basis'>Flex Basis</h4>
        <p><span className='quote'>flex-basis</span> determines the initial size of flex items along the main axis before any remaining space is distributed. It specifies the default size of flex items when there is no <span className='quote'>flex-grow</span> or <span className='quote'>flex-shrink</span> value applied.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Flex Direction'>Flex Direction</h4>
        <p><span className='quote'>flex-direction</span> defines the direction of the main axis and the cross axis in a flex container. It allows you to arrange flex items either horizontally or vertically.</p>
        <ClassTable tableItems={table2} />
        <CodeExample snippet={example2} />

        <h4 id='Flex Wrap'>Flex Wrap</h4>
        <p><span className='quote'>flex-wrap</span> controls how flex items are wrapped within a flex container when they cannot fit in a single line. It specifies whether flex items should wrap onto multiple lines or stay within a single line.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Flex Grow Shrink'>Flex Grow / Shrink</h4>
        <p><span className='quote'>flex-grow</span> and <span className='quote'>flex-shrink</span> determine how flex occupy available space along the main axis when there is extra space in the flex container.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Gap'>Gap</h4>
        <p><span className='quote'>gap</span> sets the spacing between flex items within a flex container.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h3 id='Justify'>Justify</h3>
        <p>FleXkit provides a range of properties to help you distribute <span className='quote'>flex</span> items along the main axis of a <span className='quote'>flex</span> container.</p>

        <h4 id='Justify Content'>Justify Content</h4>
        <p><span className='quote'>justify-content</span> distributes the remaining space or adjusts the size of flex items to create visual balance.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Justify Items'>Justify Items</h4>
        <p><span className='quote'>justify-items</span> allows you to position flex items at different positions within the container.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Justify Self'>Justify Self</h4>
        <p><span className='quote'>justify-self</span> allows you to override the default alignment set by the parent container.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h3 id='Align'>Align</h3>
        <p>FleXkit offers a set of properties to control the alignment of flex items along the cross axis of a flex container.</p>

        <h4 id='Align Content'>Align Content</h4>
        <p><span className='quote'>align-content</span> controls the spacing between lines of flex items and their alignment within the flex container.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Align Items'>Align Items</h4>
        <p><span className='quote'>align-items</span> allows you to position flex items at the start, end, center, stretch, or baseline within the container.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

        <h4 id='Align Self'>Align Self</h4>
        <p><span className='quote'>align-self</span> allows you to override the default alignment set by the parent container.</p>
        <ClassTable tableItems={table1} />
        <CodeExample snippet={example1} />

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
        <h4 onClick={() => scrollPosition('Justify')}>Justify</h4>
        <h5 onClick={() => scrollPosition('Justify Content')}>Justify Content</h5>
        <h5 onClick={() => scrollPosition('Justify Items')}>Justify Items</h5>
        <h5 onClick={() => scrollPosition('Justify Self')}>Justify Self</h5>
        <h4 onClick={() => scrollPosition('Align')}>Align</h4>
        <h5 onClick={() => scrollPosition('Align Content')}>Align Content</h5>
        <h5 onClick={() => scrollPosition('Align Items')}>Align Items</h5>
        <h5 onClick={() => scrollPosition('Align Self')}>Align Self</h5>
      </div>
    </article>
  );
}

export default Flexbox;


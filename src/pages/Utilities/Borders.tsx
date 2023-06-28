import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TbAlertTriangle, TbCircleCheck } from 'react-icons/tb';
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
} from '../../constants/utilities/borders';

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
    <article className={ sidebarActive ? 'article-content-sb-active' : 'article-content'}>
      <h2>Borders</h2>
      <p>Flexcore provides utility classes to customize and style the borders of elements.</p>

      <h3 id='Properties'>Properties</h3>
      <h4 id='Border Radius'>Border Radius</h4>
      <p>The <mark>border-radius</mark> utility classes allow you to round the corners of elements. You can apply different levels of border radius, from small to large, to achieve different visual effects.</p>
      <ClassTable tableItems={table1} />
      <CodeExample snippet={example1} />

      <h4 id='Border Width'>Border Width</h4>
      <p>The <mark>border-width</mark> classes allow you to set the width of element borders. You can apply different widths to achieve thin or thick borders.</p>
      <ClassTable tableItems={table2} />
      <CodeExample snippet={example6} />

      <h4 id='Border Color'>Border Color</h4>
      <p>The <mark>border-color</mark> utility classes allow you to change the color of element borders. You can apply different colors to match your design preferences.</p>

      <section className='notification-container-success'>
        <TbCircleCheck />
        <span className='quote-text'>
          Remember that the borders also have the light and dark prefixes.
        </span>
      </section>

      <ClassTable tableItems={table3} />
      <CodeExample snippet={example2} />

      <h4 id='Border Style'>Border Style</h4>
      <p>The <mark>border-style</mark> classes allow you to set the style of element borders, such as solid, dashed, or dotted.</p>
      <ClassTable tableItems={table4} />
      <CodeExample snippet={example3} />

      <h3 id='Outline'>Outline</h3>
      <p>The outline category includes utility classes to customize the <mark>outline</mark> of elements. An outline is a line drawn outside the element's border.</p>

      <section className='notification-container-warning'>
        <TbAlertTriangle />
        <span className='quote-text'>
          The outline is drawn outside the element's border, and may overlap other content. It is NOT a part of an element' dimensions; the element's total width and height is not affected by the width of the outline.
        </span>
      </section>

      <h4 id='Outline Width'>Outline Width</h4>
      <p>The <mark>outline-width</mark> utility classes allow you to set the width of element outlines. You can apply different widths to achieve thin or thick outlines.</p>
      <ClassTable tableItems={table5} />
      <CodeExample snippet={example7} />

      <h4 id='Outline Color'>Outline Color</h4>
      <p>The <mark>outline-color</mark> classes set the color of the outline.</p>
      <ClassTable tableItems={table6} />
      <CodeExample snippet={example4} />

      <h4 id='Outline Style'>Outline Style</h4>
      <p>With the <mark>outline-style</mark> classes, you can choose from various outlines styles:</p>
      <ClassTable tableItems={table7} />
      <CodeExample snippet={example5} />

      <h4 id='Outline Offset'>Outline Offset</h4>
      <p>The <mark>outline-width</mark> utility classes allow you to set the width of element outlines. You can apply different widths to achieve thin or thick outlines.</p>
      <ClassTable tableItems={table8} />
      <CodeExample snippet={example8} />

      <footer>
        <Link to='/layouts/flexbox'>Flexbox</Link>
        <Link to='/utilities/sizing'>Sizing</Link>
      </footer>

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Borders</h4>
        <h4 onClick={() => scrollPosition('Properties')}>Properties</h4>
        <h5 onClick={() => scrollPosition('Border Radius')}>Border Radius</h5>
        <h5 onClick={() => scrollPosition('Border Width')}>Border Width</h5>
        <h5 onClick={() => scrollPosition('Border Color')}>Border Color</h5>
        <h5 onClick={() => scrollPosition('Border Style')}>Border Style</h5>
        <h4 onClick={() => scrollPosition('Outline')}>Outline</h4>
        <h5 onClick={() => scrollPosition('Outline Width')}>Outline Width</h5>
        <h5 onClick={() => scrollPosition('Outline Color')}>Outline Color</h5>
        <h5 onClick={() => scrollPosition('Outline Style')}>Outline Style</h5>
        <h5 onClick={() => scrollPosition('Outline Offset')}>Outline Offset</h5>
      </div>
    </article>
  );
}

export default Interactivity;

import { useEffect, useContext } from 'react';
import { TbInfoCircle } from 'react-icons/tb';
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
  example9,
  example10,
  table1,
  table2,
  table3,
  table4,
  table5,
  table6,
  table7,
  table8,
} from '../../constants/typography/text-formatting';

const TextFormatting = () => {
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
        <h2>Text Formatting</h2>
        <p>Text formatting is essential for creating visually appealing and readable interfaces. Flexcore offers a range of options to customize the typography of your web pages. Let's dive into the various aspects of text formatting that Flexcore provides.</p>

        <h3 id='Headings'>Headings</h3>
        <p><mark>headings</mark> are crucial for organizing content and establishing a hierarchy within your web pages.</p>
        <CodeExample snippet={example1} />
        <p>If you need to match the font styling of a <mark>heading</mark> but cannot use the associated HTML element, Flexcore provides <mark>.h1</mark> through <mark>.h6</mark> classes for your convenience.</p>
        <CodeExample snippet={example2} />

        <h3 id='Font Customization'>Font Customization</h3>
        <section className='notification-container-info'>
          <TbInfoCircle />
          <span className='quote-text'>
            Customizing fonts is a powerful way to align your web interfaces with your design preferences.
          </span>
        </section>

        <h4 id='Font Size'>Font Size</h4>
        <p>Font size is crucial for establishing visual hierarchy and readability. Flexcore offers preset <mark>font-size</mark> classes to easily adjust the size of your text:</p>
        <ClassTable tableItems={table1} />
        <p>Font customization allows you to choose from a wide range of <strong>sizes</strong> and <strong>weights</strong> to achieve the desired visual style for your <mark>headings</mark> and text elements. Experimenting with different combinations of fonts can enhance the aesthetics and readability of your interface.</p>
        <CodeExample snippet={example3} />

        <h4 id='Font Weight'>Font Weight</h4>
        <p><mark>font-weight</mark> adds emphasis and visual impact to your text. With Flexcore, you can effortlessly customize the font weight:</p>
        <ClassTable tableItems={table2} />
        <CodeExample snippet={example4} />

        <h4 id='Font Style'>Font Style</h4>
        <p><mark>font-style</mark> adds personality and character to your text. Flexcore provides easy ways to apply font styles:</p>
        <ClassTable tableItems={table3} />
        <CodeExample snippet={example5} />

        <h3 id='Layout and Alignment'>Layout and Alignment</h3>
        <section className='notification-container-info'>
          <TbInfoCircle />
          <span className='quote-text'>
            Layout and alignment contribute to the visual harmony and readability of your web interfaces. Flexcore offers tools to fine-tune the layout and alignment of your text.
          </span>
        </section>

        <h4 id='Text Alignment'>Text Alignment</h4>
        <p>Text alignment plays a crucial role in establishing a clear visual structure. Flexcore provides classes to align text in different contexts:</p>
        <ClassTable tableItems={table4} />
        <CodeExample snippet={example6} />

        <h4 id='Text Transform'>Text Transform</h4>
        <p><mark>text-transform</mark> allows you to control the capitalization and styling of text within your web interface:</p>
        <ClassTable tableItems={table8} />
        <CodeExample snippet={example10} />

        <h4 id='Line Height'>Line Height</h4>
        <p><mark>line-height</mark> affects the spacing between lines of text, impacting readability. Flexcore offers classes to adjust the line height:</p>
        <ClassTable tableItems={table5} />
        <CodeExample snippet={example7} />

        <h4 id='Letter Spacing'>Letter Spacing</h4>
        <p><mark>letter-spacing</mark> influences the spacing between characters, improving legibility and visual impact. Flexcore provides classes to adjust letter spacing:</p>
        <ClassTable tableItems={table6} />
        <CodeExample snippet={example8} />

        <h3 id='Lists'>Lists</h3>
        <p>Flexcore offers simple options for creating both ordered and unordered lists.</p>
        <section className='notification-container-info'>
          <TbInfoCircle />
          <span className='quote-text'>
            Lists are a great way to present information in an organized manner.
          </span>
        </section>
        <ClassTable tableItems={table7} />
        <CodeExample snippet={example9} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Text Formatting</h4>
        <h4 onClick={() => scrollPosition('Headings')}>Headings</h4>
        <h4 onClick={() => scrollPosition('Font Customization')}>Font Customization</h4>
        <h5 onClick={() => scrollPosition('Font Size')}>Font Size</h5>
        <h5 onClick={() => scrollPosition('Font Weight')}>Font Weight</h5>
        <h5 onClick={() => scrollPosition('Font Style')}>Font Style</h5>
        <h4 onClick={() => scrollPosition('Layout and Alignment')}>Layout and Alignment</h4>
        <h5 onClick={() => scrollPosition('Text Alignment')}>Text Alignment</h5>
        <h5 onClick={() => scrollPosition('Text Transform')}>Text Transform</h5>
        <h5 onClick={() => scrollPosition('Line Height')}>Line Height</h5>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Letter Spacing</h5>
        <h4 onClick={() => scrollPosition('Lists')}>Lists</h4>
      </div>
    </article>
  );
}

export default TextFormatting;

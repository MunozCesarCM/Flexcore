import { TbInfoCircle } from 'react-icons/tb';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
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
} from '../../constants/typography/text-formatting';

interface TextFormatting {
  sidebarActive: boolean;
}

const TextFormatting = ({ sidebarActive }: TextFormatting) => {

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

  return (
    <article  className={ sidebarActive ? 'article-content-sb-active' : 'article-content'}>
      <section style={{maxWidth: (sidebarActive ? 'calc(100vw - 300px - 275px)' : '100vw')}}>
        <h2>Text Formatting</h2>
        <p>Text formatting is essential for creating visually appealing and readable interfaces. FleXkit offers a range of options to customize the typography of your web pages. Let's dive into the various aspects of text formatting that FleXkit provides.</p>

        <h3 id='Headings'>Headings</h3>
        <p><span className='quote'>headings</span> are crucial for organizing content and establishing a hierarchy within your web pages.</p>
        <CodeExample snippet={example1} />
        <p>If you need to match the font styling of a <span className='quote'>heading</span> but cannot use the associated HTML element, FleXkit provides <span className='quote'>.h1</span> through <span className='quote'>.h6</span> classes for your convenience.</p>
        <CodeExample snippet={example2} />

        <h3 id='Font Customization'>Font Customization</h3>
        <section className='notification-container'>
          <TbInfoCircle />
          <span className='quote-text'>
            Customizing fonts is a powerful way to align your web interfaces with your design preferences.
          </span>
        </section>

        <h4 id='Font Customization'>Font Size</h4>
        <p>Font size is crucial for establishing visual hierarchy and readability. FleXkit offers preset <span className='quote'>font-size</span> classes to easily adjust the size of your text:</p>
        <ClassTable tableItems={table1} />
        <p>Font customization allows you to choose from a wide range of <strong>sizes</strong> and <strong>weights</strong> to achieve the desired visual style for your <span className='quote'>headings</span> and text elements. Experimenting with different combinations of fonts can enhance the aesthetics and readability of your interface.</p>
        <CodeExample snippet={example3} />

        <h4 id='Color and Styling'>Font Weight</h4>
        <ClassTable tableItems={table2} />
        <p><span className='quote'>font-weight</span> adds emphasis and visual impact to your text. With FleXkit, you can effortlessly customize the font weight:</p>
        <CodeExample snippet={example4} />

        <h4 id='Color and Styling'>Font Style</h4>
        <p><span className='quote'>font-style</span> adds personality and character to your text. FleXkit provides easy ways to apply font styles:</p>
        <ClassTable tableItems={table3} />
        <CodeExample snippet={example5} />

        <h3 id='Layout and Alignment'>Layout and Alignment</h3>
        <section className='notification-container'>
          <TbInfoCircle />
          <span className='quote-text'>
            Layout and alignment contribute to the visual harmony and readability of your web interfaces. FleXkit offers tools to fine-tune the layout and alignment of your text.
          </span>
        </section>

        <h4 id='Text Alignment'>Text Alignment</h4>
        <p>Text alignment plays a crucial role in establishing a clear visual structure. FleXkit provides classes to align text in different contexts:</p>
        <ClassTable tableItems={table4} />
        <CodeExample snippet={example6} />

        <h4 id='Text Alignment'>Text Alignment</h4>
        <p><span className='quote'>line-height</span> affects the spacing between lines of text, impacting readability. FleXkit offers classes to adjust the line height:</p>
        <ClassTable tableItems={table5} />
        <CodeExample snippet={example7} />

        <h4 id='Text Alignment'>Text Alignment</h4>
        <p><span className='quote'>letter-spacing</span> influences the spacing between characters, improving legibility and visual impact. FleXkit provides classes to adjust letter spacing:</p>
        <ClassTable tableItems={table6} />
        <CodeExample snippet={example8} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Text Formatting</h4>
        <h5 onClick={() => scrollPosition('Headings')}>Headings</h5>
        <h4 onClick={() => scrollPosition('Font Customization')}>Font Customization</h4>
        <h5 onClick={() => scrollPosition('Font Size')}>Font Size</h5>
        <h5 onClick={() => scrollPosition('Font Weight')}>Font Weight</h5>
        <h5 onClick={() => scrollPosition('Font Style')}>Font Style</h5>
        <h4 onClick={() => scrollPosition('Layout and Alignment')}>Layout and Alignment</h4>
        <h5 onClick={() => scrollPosition('Text Alignment')}>Text Alignment</h5>
        <h5 onClick={() => scrollPosition('Line Height')}>Line Height</h5>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Letter Spacing</h5>
        <h4 onClick={() => scrollPosition('Lists')}>Lists</h4>
        <h5 onClick={() => scrollPosition('Ordered Lists')}>Ordered Lists</h5>
        <h5 onClick={() => scrollPosition('Unordered Lists')}>Unordered Lists</h5>
      </div>
    </article>
  );
}

export default TextFormatting;

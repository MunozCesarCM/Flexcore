import { TbInfoCircle } from 'react-icons/tb';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import { example1, example2, example3, table1 } from '../../constants/typography/text-formatting';

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
        <p><span className='quote'>Headings</span> are crucial for organizing content and establishing a hierarchy within your web pages.</p>
        <CodeExample snippet={example1} />
        <p>If you need to match the font styling of a <span className='quote'>heading</span> but cannot use the associated HTML element, FleXkit provides <span className='quote'>.h1</span> through <span className='quote'>.h6</span> classes for your convenience.</p>
        <CodeExample snippet={example2} />

        <h3 id='Font Customization'>Font Customization</h3>
        <blockquote>
          <TbInfoCircle />
          Customizing fonts is a powerful way to align your web interfaces with your design preferences.
        </blockquote>
        <ClassTable tableItems={table1} />

        <p>Font customization allows you to choose from a wide range of <strong>sizes</strong> and <strong>weights</strong> to achieve the desired visual style for your <span className='quote'>headings</span> and text elements. Experimenting with different combinations of fonts can enhance the aesthetics and readability of your interface.</p>
        <CodeExample snippet={example3} />

        <h4 id='Color and Styling'>Color and Styling</h4>
        <p>Customizing the color and styling of <span className='quote'>headings</span> and text elements can help define the overall look and feel of your interface. With FleXkit, you can easily adjust the following aspects to create visually appealing designs:</p>
        <ul>
          <li>Text color</li>
          <li>Letter spacing</li>
          <li>Line height</li>
          <li>Text alignment</li>
        </ul>
        <p>By customizing these elements, you can achieve a unique and cohesive visual style for your interface.</p>
        <CodeExample snippet={example3} />

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

import { TbInfoCircle} from 'react-icons/tb';
import CodeExample from '../components/CodeExample';
import { example1, example2, example3 } from '../constants/typography/headings';

interface Headings {
  sidebarActive: boolean;
}

const Headings = ({ sidebarActive }: Headings) => {

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
        <h2>Headings</h2>
        <p>In this section, we will explore the customization options provided by FleXkit, allowing you to create <strong>unique</strong> and <strong>engaging</strong> headings that align with your design preferences.</p>
        <blockquote>
          <TbInfoCircle />
          Customizing headings and text elements is crucial for creating visually appealing and well-structured web interfaces.
        </blockquote>
        <p>All HTML headings, <span className='quote'>h1</span> through <span className='quote'>h6</span>, are available.</p>
        <CodeExample snippet={example1} />

        <h3 id='Headings Classes'>Headings Classes</h3>
        <p>If you need to match the font styling of a <span className='quote'>heading</span> but cannot use the associated HTML element, FleXkit provides <span className='quote'>.h1</span> through <span className='quote'>.h6</span> classes for your convenience.</p>
        <CodeExample snippet={example2} />

        <h3 id='Customization Options'>Customization Options</h3>

        <h4 id='Font Customization'>Font Customization</h4>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>text-xs</td>
              <td>font-size:1em<br />line-height: 1.25em</td>
            </tr>
            <tr>
              <td>text-sm</td>
              <td>font-size:1em<br />line-height: 1.25em</td>
            </tr>
            <tr>
              <td>text-xs</td>
              <td>font-size:1em<br />line-height: 1.25em</td>
            </tr>
            <tr>
              <td>text-xs</td>
              <td>font-size:1em<br />line-height: 1.25em</td>
            </tr>
            <tr>
              <td>text-xs</td>
              <td>font-size:1em<br />line-height: 1.25em</td>
            </tr>
            <tr>
              <td>text-xs</td>
              <td>font-size:1em<br />line-height: 1.25em</td>
            </tr>
            <tr>
              <td>text-xs</td>
              <td>font-size:1em<br />line-height: 1.25em</td>
            </tr>
            <tr>
              <td>italic</td>
              <td>font-style: italic</td>
            </tr>
            <tr>
              <td>non-italic</td>
              <td>font-style: normal</td>
            </tr>
          </tbody>
        </table>
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
        <h4 onClick={() => scrollPosition('')}>Headings</h4>
        <h4 onClick={() => scrollPosition('Font Customization')}>Font Customization</h4>
        <h5 onClick={() => scrollPosition('Font Size')}>Font Size</h5>
        <h5 onClick={() => scrollPosition('Font Weight')}>Font Weight</h5>
        <h4 onClick={() => scrollPosition('Color and Styling')}>Color and Styling</h4>
        <h5 onClick={() => scrollPosition('Text Color')}>Text Color</h5>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Letter Spacing</h5>
        <h5 onClick={() => scrollPosition('Line Height')}>Line Height</h5>
        <h5 onClick={() => scrollPosition('Text Alignment')}>Text Alignment</h5>
      </div>
    </article>
  );
}

export default Headings;

import { TbInfoCircle, TbAlertTriangle } from 'react-icons/tb';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import ColorPalette from '../../components/ColorPalette';
import {
  example1,
  example2,
  example3,
  example4,
  table1,
  table2,
  table3,
} from '../../constants/typography/color-styling';

interface TextFormatting {
  sidebarActive: boolean;
}

const ColorStyling = ({ sidebarActive }: TextFormatting) => {

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
        <h2>Color and Styling</h2>
        <p>This section provides an overview of the color and styling capabilities offered by FleXkit and how they can enhance your UI designs.</p>
        <section className='notification-container-info'>
          <TbInfoCircle />
          <span className='quote-text'>
            In web interfaces, color and styling play a vital role in creating visually appealing and engaging user experiences.
          </span>
        </section>

        <h3 id='Headings'>Color Palette</h3>
        <p>If you lack a specific branding concept, FleXkit provides a meticulously designed default color palette that serves as an excellent foundation right from the start:</p>
        <ColorPalette />
      </section>

      <h4 id='Headings'>Customization</h4>
      <p>FleXkit also offers variables you can change to set your own <strong>custom theme</strong>. This enables you to tailor the color palette to your specific needs, infusing your brand's personality and style into the UI. Here's an example of how to customize the variables:</p>
      <ClassTable tableItems={table2} />
      <CodeExample snippet={example1} />

      <section className='notification-container-warning'>
        <TbAlertTriangle />
        <span className='quote-text'>
          For more detailed information on using FleXkit's theming, please refer to the <strong>"Theming"</strong> section in this document.
        </span>
      </section>

      <h3 id='Headings'>Element Colors</h3>
      <p>In FleXkit, you have the flexibility to customize the colors of various UI elements, allowing you to create visually appealing and cohesive designs. This section explores how you can modify the <span className='quote'>text-color</span>, <span className='quote'>background-color</span>, and <span className='quote'>border</span> color to suit your specific design requirements.</p>

      <h4 id='Headings'>Text Color</h4>
      <ClassTable tableItems={table1} />
      <p>FleXkit provides easy ways to modify the <span className='quote'>text-color</span> throughout your interface. To change the text color for a specific element or component, you can use FleXkit's color classes and override the default color property:</p>
      <CodeExample snippet={example2} />

      <h4 id='Headings'>Background Color</h4>
      <ClassTable tableItems={table3} />
      <p>With FleXkit, you can easily customize the <span className='quote'>background-color</span> of elements such as containers, buttons, or sections:</p>
      <CodeExample snippet={example3} />

      <h3 id='Headings'>Theming</h3>
      <p>FleXkit provides a powerful theming feature that allows you to create your own unique design by modifying theme variables. With FleXkit theming, you can effortlessly customize the overall appearance of your web interface to match your brand or design preferences.</p>

      <section className='notification-container-info'>
        <TbInfoCircle />
        <span className='quote-text'>
          FleXkit supports both light and dark modes, providing a seamless transition between different visual styles.
        </span>
      </section>

      <h4 id='Headings'>Theme Variables</h4>
      <p>By modifying theme variables, you can easily tailor the colors, and other design elements of your interface. FleXkit offers a range of theme variables that control various aspects of the UI.</p>
      <p>To customize a theme variable, you can update its value using CSS:</p>
      <CodeExample snippet={example4} />

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Color and Styling</h4>
        <h4 onClick={() => scrollPosition('Headings')}>Color Palette</h4>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Customization</h5>
        <h4 onClick={() => scrollPosition('Headings')}>Element Colors</h4>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Text Color</h5>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Background Color</h5>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Border Color</h5>
        <h4 onClick={() => scrollPosition('Headings')}>Theming</h4>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Theme Variables</h5>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Light and Dark Mode</h5>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Custom Theme</h5>
        <h4 onClick={() => scrollPosition('Headings')}>Accessibility</h4>
      </div>
    </article>
  );
}

export default ColorStyling;

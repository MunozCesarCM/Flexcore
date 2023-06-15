import { useEffect, useContext } from 'react';
import { TbInfoCircle, TbAlertTriangle, TbCircleCheck } from 'react-icons/tb';
import CodeExample from '../../components/CodeExample';
import ClassTable from '../../components/ClassTable';
import ColorPalette from '../../components/ColorPalette';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  example3,
  example5,
  example6,
  example7,
  table1,
  table2,
  table3,
  table5,
} from '../../constants/typography/color-styling';

const ColorStyling = () => {
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
        <h2>Color and Styling</h2>
        <p>This section provides an overview of the color and styling capabilities offered by FleXkit and how they can enhance your UI designs.</p>
        <section className='notification-container-info'>
          <TbInfoCircle />
          <span className='quote-text'>
            In web interfaces, color and styling play a vital role in creating visually appealing and engaging user experiences.
          </span>
        </section>

        <h3 id='Color Palette'>Color Palette</h3>
        <p>If you lack a specific branding concept, FleXkit provides a meticulously designed default color palette that serves as an excellent foundation right from the start:</p>
        <ColorPalette />
      </section>

      <h4 id='Customization'>Customization</h4>
      <p>FleXkit also offers the ability to create variables you can change to set your own <strong>custom theme</strong>. This enables you to tailor a color palette to your specific needs.</p>
      <p>FleXkit offers a few basic variables to get you started:</p>
      <ClassTable tableItems={table2} />
      <CodeExample snippet={example1} />

      <section className='notification-container-warning'>
        <TbAlertTriangle />
        <span className='quote-text'>
          For more detailed information on using FleXkit's theming, please refer to the "Theming" section in this document.
        </span>
      </section>

      <h3 id='Element Colors'>Element Colors</h3>
      <p>In FleXkit, you have the flexibility to customize the colors of various UI elements, allowing you to create visually appealing designs. This section explores how you can modify the <span className='quote'>text-color</span>, <span className='quote'>background-color</span>, and <span className='quote'>border-color</span> to suit your specific design requirements.</p>

      <h4 id='Text Color'>Text Color</h4>
      <ClassTable tableItems={table1} />
      <CodeExample snippet={example2} />

      <h4 id='Background Color'>Background Color</h4>
      <p>With FleXkit, you can easily customize the <span className='quote'>background-color</span> of elements such as containers, buttons, or sections:</p>
      <ClassTable tableItems={table3} />
      <CodeExample snippet={example3} />

      <h4 id='Opacity'>Opacity</h4>
      <p>FleXkit allows you to control the <span className='quote'>opacity</span> of various elements. Opacity refers to the transparency level of an element, with lower values indicating greater transparency.</p>
      <ClassTable tableItems={table5} />
      <CodeExample snippet={example7} />

      <h3 id='Theming'>Theming</h3>
      <p>FleXkit provides a powerful theming feature that allows you to create your own unique design by modifying theme variables or adding a theme prefix.</p>

      <section className='notification-container-info'>
        <TbInfoCircle />
        <span className='quote-text'>
          FleXkit supports both light and dark modes, providing a seamless transition between different visual styles.
        </span>
      </section>

      <h4 id='Theme Variables'>Theme Variables</h4>
      <ClassTable tableItems={table2} />
      <p>By modifying theme variables, you can easily tailor the colors, and other design elements of your interface. FleXkit offers a range of theme variables that control various aspects of the UI. To customize a theme variable, you can update its value using CSS:</p>
      <CodeExample snippet={example1} />

      <h4 id='Theme Prefix'>Theme Prefix</h4>
      <p>To apply colors specific to each mode, FleXkit introduces a <strong>prefix system</strong>. By adding the prefix <span className='quote'>dark:</span> or <span className='quote'>light:</span> to any color class, you can ensure that the color is only applied when using the corresponding theme.</p>
      <p>This allows you to define specific color variations for light mode, dark mode, or even different shades within each mode:</p>
      <CodeExample snippet={example5} />

      <h4 id='Custom Theme'>Custom Theme</h4>
      <p>FleXkit allows you to create a <strong>fully customized</strong> theme that aligns with your design requirements. By creating a new theme class, you can achieve an unique design throughout your site.</p>
      <section className='notification-container-success'>
        <TbCircleCheck />
        <span className='quote-text'>
          By combining the customization capabilities of FleXkit with your creative vision, you can create a truly personalized and visually stunning interface.
        </span>
      </section>
      <p>To create a custom theme, identify the theme variables you want to modify and update their values accordingly. Experiment with different colors to achieve your desired aesthetic.</p>
      <CodeExample snippet={example6} template={false} />

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Color and Styling</h4>
        <h4 onClick={() => scrollPosition('Color Palette')}>Color Palette</h4>
        <h5 onClick={() => scrollPosition('Customization')}>Customization</h5>
        <h4 onClick={() => scrollPosition('Element Colors')}>Element Colors</h4>
        <h5 onClick={() => scrollPosition('Text Color')}>Text Color</h5>
        <h5 onClick={() => scrollPosition('Background Color')}>Background Color</h5>
        <h5 onClick={() => scrollPosition('Opacity')}>Opacity</h5>
        <h4 onClick={() => scrollPosition('Theming')}>Theming</h4>
        <h5 onClick={() => scrollPosition('Theme Variables')}>Theme Variables</h5>
        <h5 onClick={() => scrollPosition('Theme Prefix')}>Theme Prefix</h5>
        <h5 onClick={() => scrollPosition('Custom Theme')}>Custom Theme</h5>
      </div>
    </article>
  );
}

export default ColorStyling;

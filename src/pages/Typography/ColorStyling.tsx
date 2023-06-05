import { TbInfoCircle } from 'react-icons/tb';
import CodeExample from '../../components/CodeExample';
import ColorPalette from '../../components/ColorPalette';
import {
  example1,
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
        <section className='notification-container'>
          <TbInfoCircle />
          <span className='quote-text'>
            In web interfaces, color and styling play a vital role in creating visually appealing and engaging user experiences.
          </span>
        </section>

        <h3 id='Headings'>Color Palette</h3>
        <p>If you lack a specific branding concept, FleXkit provides a meticulously designed default color palette that serves as an excellent foundation right from the start:</p>
        <ColorPalette />
        <CodeExample snippet={example1} />
      </section>

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Color and Styling</h4>
        <h4 onClick={() => scrollPosition('Headings')}>Color Palette</h4>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Customization</h5>
        <h4 onClick={() => scrollPosition('Headings')}>Text Color</h4>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Text Color</h5>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Background Color</h5>
        <h5 onClick={() => scrollPosition('Letter Spacing')}>Border Color</h5>
        <h4 onClick={() => scrollPosition('Headings')}>Theming</h4>
        <h4 onClick={() => scrollPosition('Headings')}>Accessibility</h4>
      </div>
    </article>
  );
}

export default ColorStyling;

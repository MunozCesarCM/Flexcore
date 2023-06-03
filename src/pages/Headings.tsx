import { TbInfoCircle} from 'react-icons/tb';
import CodeExample from '../components/CodeExample';
import { example1, example2 } from '../constants/typography/headings';

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
        <p>In this section, we will explore the customization options provided by FleXkit, allowing you to create unique and engaging headings that align with your design preferences.</p>
        <blockquote>
          <TbInfoCircle />
          Customizing headings and text elements is crucial for creating visually appealing and well-structured web interfaces.
        </blockquote>
        <p>All HTML headings, <span className='quote'>h1</span> through <span className='quote'>h6</span>, are available.</p>
        <CodeExample snippet={example1} />

        <h3 id='Headings Classes'>Headings Classes</h3>
        <p>If you need to match the font styling of a heading but cannot use the associated HTML element, FleXkit provides <span className='quote'>.h1</span> through <span className='quote'>.h6</span> classes for your convenience.</p>
        <CodeExample snippet={example2} />

        <h3 id='Customization Options'>Customization Options</h3>
        <h4 id='Font Customization'>Font Customization</h4>
        <p>Font customization allows you to choose from a wide range of font families, sizes, and weights to achieve the desired visual style for your headings and text elements. Experimenting with different combinations of fonts can enhance the aesthetics and readability of your interface.</p>
      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Headings</h4>
        <h4 onClick={() => scrollPosition('Headings Classes')}>Headings Classes</h4>
        <h4 onClick={() => scrollPosition('Customization Options')}>Customization Options</h4>
        <h5 onClick={() => scrollPosition('Font Customization')}>Font Customization</h5>
      </div>
    </article>
  );
}

export default Headings;

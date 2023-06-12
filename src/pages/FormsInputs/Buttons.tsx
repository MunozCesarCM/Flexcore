import { useEffect, useContext } from 'react';
import CodeExample from '../../components/CodeExample';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
} from '../../constants/forms-inputs/buttons';

const Buttons = () => {
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
        <h2>Buttons</h2>
        <p>FleXkit offers a wide range of button styles and variations to enhance your user interface. Each button type is designed with a specific purpose and visual style, allowing you to create engaging and interactive experiences. Let's explore the different button types you can create with FleXkit:</p>

        <h3 id=''>Standard Buttons</h3>
        <p>These buttons serve as the foundation for most interactions. They provide clear and distinguishable styles for primary, secondary, success, warning, danger, and info actions. Use them to guide users towards important actions or convey different levels of urgency.</p>
        <CodeExample snippet={example1} />

        <h3 id=''>Stylistic Buttons</h3>
        <p>For added visual appeal, FleXkit offers stylistic buttons that provide different looks and feels. Choose between outline, filled, or text buttons to match your design preferences and create eye-catching interfaces.</p>
        <CodeExample snippet={example2} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Buttons</h4>
        <h4 onClick={() => scrollPosition('')}>Standard Buttons</h4>
        <h4 onClick={() => scrollPosition('')}>Stylistic Buttons</h4>
        <h4 onClick={() => scrollPosition('')}>State Buttons</h4>
        <h4 onClick={() => scrollPosition('')}>Size Buttons</h4>
        <h4 onClick={() => scrollPosition('')}>Icon Buttons</h4>
        <h4 onClick={() => scrollPosition('')}>Link Button</h4>
      </div>
    </article>
  );
}

export default Buttons;


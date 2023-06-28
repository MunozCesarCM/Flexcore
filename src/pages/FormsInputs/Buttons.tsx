import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CodeExample from '../../components/CodeExample';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  example3,
  example4,
  example5,
} from '../../constants/forms-inputs/buttons';

const Buttons = () => {
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
      <h2>Buttons</h2>
      <p>Flexcore offers a wide range of button styles and variations to enhance your user interface. Let's explore the different button types you can create with Flexcore:</p>

      <h3 id='Standard Buttons'>Standard Buttons</h3>
      <p>These buttons serve as the foundation for most interactions. They provide clear and distinguishable styles for different actions. Use them to guide users towards important actions or convey different levels of urgency.</p>
      <CodeExample snippet={example1} />

      <h3 id='Stylistic Buttons'>Stylistic Buttons</h3>
      <p>For added visual appeal, you can create styled buttons to match your design preferences and create eye-catching interfaces.</p>
      <CodeExample snippet={example2} />

      <h3 id='State Buttons'>State Buttons</h3>
      <p>State buttons allow you to indicate the disabled state of a button. These buttons appear much lighter and are non-interactive, providing visual feedback that certain actions are not currently available or applicable.</p>
      <CodeExample snippet={example3} />

      <h3 id='Buttons Size'>Buttons Size</h3>
      <p>Adjust the size of your buttons to suit different contexts or emphasize specific actions. With Flexcore you can create small and large buttons to create visual hierarchy or optimize space allocation.</p>
      <CodeExample snippet={example4} />

      <h3 id='Icon Buttons'>Icon Buttons</h3>
      <p>Combine the power of icons with buttons to enhance usability and visual communication. Flexcore allows you to integrate icons with your buttons, either as standalone icon-only buttons or buttons with icons and accompanying text.</p>
      <CodeExample snippet={example5} />

      <footer>
        <Link to='/showcase/twitter'>Twitter</Link>
        <Link to='/forms-and-inputs/text-fields'>Text Fields</Link>
      </footer>

      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Buttons</h4>
        <h4 onClick={() => scrollPosition('Standard Buttons')}>Standard Buttons</h4>
        <h4 onClick={() => scrollPosition('Stylistic Buttons')}>Stylistic Buttons</h4>
        <h4 onClick={() => scrollPosition('State Buttons')}>State Buttons</h4>
        <h4 onClick={() => scrollPosition('Buttons Size')}>Buttons Size</h4>
        <h4 onClick={() => scrollPosition('Icon Buttons')}>Icon Buttons</h4>
      </div>
    </article>
  );
}

export default Buttons;


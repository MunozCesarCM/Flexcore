import { useEffect, useContext } from 'react';
import { TbInfoCircle } from 'react-icons/tb';
import CodeExample from '../../components/CodeExample';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  example3,
  example4,
  example5,
} from '../../constants/forms-inputs/text-fields';

const TextFields = () => {
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
        <h2>Text Fields</h2>
        <p>Text fields provide an input mechanism for users to enter text or data into a web form. With FleXkit you can create a versatile set of text field components that can be easily customized into your interface.</p>

        <h3 id='Basic Example'>Basic Example</h3>
        <p>To get started with text fields, you can use the following code snippet as a basic example:</p>
        <CodeExample snippet={example1} />

        <h3 id='Sizing'>Sizing</h3>
        <p>To get started with text fields, you can use the following code snippet as a basic example:</p>
        <CodeExample snippet={example2} />

        <h3 id='Disabled'>Disabled</h3>
        <p>You can disable a text field by adding the <mark>disabled</mark> attribute to the HTML input element. This will prevent user from interacting with the text field.</p>
        <CodeExample snippet={example3} />

        <h3 id='Readonly'>Readonly</h3>
        <p>If you want to make a text field read-only, you can use the <mark>readonly</mark> attribute. This will allow users to view the content of the text field but prevent them from editing it.</p>
        <section className='notification-container-info'>
          <TbInfoCircle />
          <span className='quote-text'>
            Disabled fields are entirely non-editable and unselectable, while readonly fields allow selection but restrict any modifications to the content
          </span>
        </section>
        <CodeExample snippet={example4} />

        <h3 id='Input Types'>Input Types</h3>
        <p>An <mark>input</mark> can change considerably depending on the value of its <mark>type</mark> attribute:</p>
        <CodeExample snippet={example5} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Text Fields</h4>
        <h4 onClick={() => scrollPosition('Basic Example')}>Basic Example</h4>
        <h4 onClick={() => scrollPosition('Sizing')}>Sizing</h4>
        <h4 onClick={() => scrollPosition('Disabled')}>Disabled</h4>
        <h4 onClick={() => scrollPosition('Readonly')}>Readonly</h4>
        <h4 onClick={() => scrollPosition('Input Types')}>Input Types</h4>
      </div>
    </article>
  );
}

export default TextFields;


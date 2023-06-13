import { useEffect, useContext } from 'react';
import { TbInfoCircle } from 'react-icons/tb';
import CodeExample from '../../components/CodeExample';
import AppContext from '../../context/AppContext';
import {
  example1,
  example2,
  example3,
  example4,
} from '../../constants/layouts/container';

const Flexbox = () => {
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
        <h2>Container</h2>

        <h3 id='Heroes'>Heroes</h3>
        <p>Hero is a prominent and visually appealing section that grabs the user's attention and delivers a powerful message or showcases important content. Heroes are good for:</p>
        <ul>
          <li><strong>Attention-Grabbing</strong>: Heroes are designed to instantly captivate users with impactful elements. They often incorporate compelling headlines and eye-catching visuals to create a memorable first impression.</li>
          <li><strong>Information Highlighting</strong>: Heroes serve as a focal point to showcase essential content. By placing important information in a Hero section, you can ensure that it stands out and receives the attention it deserves.</li>
          <li><strong>Calls to Action</strong>: Heroes often include a prominent call-to-action button, encouraging users to take a specific action.</li>
          <li><strong>Branding and Visual Consistency</strong>: By using consistent colors, typography, and design elements in your Hero sections, you can strengthen your brand presence and create a cohesive user experience.</li>
        </ul>
        <CodeExample snippet={example1} />
        <CodeExample snippet={example2} />

        <h3 id='Header'>Header</h3>
        <p>The Header section is an important component located at the top of a website. It serves as a navigation and branding hub, providing users with quick access to essential information and enabling seamless navigation throughout the site.</p>

        <h4 id='Simple Header'>Simple Header</h4>
      <section className='notification-container-info'>
        <TbInfoCircle />
        <span className='quote-text'>
          A simple header design offers a clean and minimalistic approach, focusing on essential elements to ensure a straightforward user experience.
        </span>
      </section>
        <CodeExample snippet={example3} />

        <h4 id='E-Commerce Header'>E-Commerce Header</h4>
        <p>An ecommerce header requires additional elements to accommodate the unique needs of an online store. Here are the key components to include in an ecommerce header:</p>
        <ul>
          <li><strong>Logo</strong>: Place your brand logo prominently in the header, ensuring it links back to the homepage.</li>
          <li><strong>Navigation Menu</strong>: Create a comprehensive and well-organized menu that includes categories, subcategories, and specific product pages. Use clear labels and consider including dropdown menus for easy navigation.</li>
          <li><strong>Search Bar</strong>: Feature a prominent search bar in the header to allow users to quickly find products by name, category, or keywords.</li>
          <li><strong>Shopping Cart</strong>: Display a shopping cart icon or indicator in the header, indicating the number of items added.</li>
        </ul>
        <CodeExample snippet={example4} />

      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('')}>Container</h4>
        <h4 onClick={() => scrollPosition('Heroes')}>Heroes</h4>
        <h4 onClick={() => scrollPosition('Header')}>Header</h4>
        <h5 onClick={() => scrollPosition('Simple Header')}>Simple Header</h5>
        <h5 onClick={() => scrollPosition('ECommerce Header')}>E-Commerce Header</h5>
        <h4 onClick={() => scrollPosition('Footer')}>Footer</h4>
      </div>
    </article>
  );
}

export default Flexbox;


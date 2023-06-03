interface GettingStarted {
  sidebarActive: boolean;
}

const GettingStarted = ({ sidebarActive }: GettingStarted) => {
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
        <h2 id='GettingStarted'>Welcome to the FleXkit Documentation!</h2>
        <p>FleXkit is an advanced <strong>user interface (UI) library</strong> designed to simplify the process of building stunning and responsive web interfaces. In this documentation, we will explore the details of FleXkit's component library, empowering you to effortlessly create engaging user experiences.</p>

        <h3>FleXkit's Component Library</h3>
        <ul>
          <li>FleXkit's component library provides a collection of <strong>customizable components</strong> for building your web interfaces.</li>
          <li>It offers ready-to-use components such as <strong>buttons, forms, navigation menus</strong>, and more.</li>
          <li>Each component is <strong>highly customizable</strong>, giving you control over colors, typography, layouts, and interactive elements.</li>
          <li>The library follows a <strong>modular approach</strong>, enabling seamless mixing and matching of components.</li>
          <li>You can easily extend the existing components or build your own custom ones based on FleXkit's foundation.</li>
        </ul>
      </section>
      <div className='article-sidebar'>
        <h3>Contents</h3>
        <h4 onClick={() => scrollPosition('GettingStarted')}>GettingStarted</h4>
        <h4 onClick={() => scrollPosition('Basic Button')}>Basic Button</h4>
        <h5 onClick={() => scrollPosition('Basic Button')}>Text</h5>
        <h5 onClick={() => scrollPosition('Basic Button')}>Contained</h5>
        <h5 onClick={() => scrollPosition('Basic Button')}>Outlined</h5>
        <h4 onClick={() => scrollPosition('Text Button')}>Text Button</h4>
        <h4 onClick={() => scrollPosition('Customization')}>Customization</h4>
      </div>
    </article>
  );
}

export default GettingStarted;

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const Sample = () => {
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <main>
      <Topbar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      <Sidebar sidebarActive={sidebarActive} />
      <article  className={ sidebarActive ? 'article-content-sb-active' : 'article-content'}>
        Lorem ipsum
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        content
        <section className='article-sidebar'>
          <h3>Content</h3>
          <h4>Button</h4>
          <h4>Button</h4>
          <h5>Child</h5>
          <h5>Child</h5>
          <h4>Button</h4>
        </section>
      </article>
    </main>
  );
}

export default Sample;

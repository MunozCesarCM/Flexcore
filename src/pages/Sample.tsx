import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const Sample = () => {
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <main>
      <Topbar />
      <Sidebar sidebarActive={sidebarActive} />
      <article className='article-content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et neque sit amet elit commodo convallis at vitae tortor. Praesent volutpat enim ac porttitor feugiat. Suspendisse sollicitudin rhoncus dui, sit amet eleifend nulla vehicula et. Ut lacinia laoreet velit, eget vehicula metus efficitur eu. Nam facilisis scelerisque quam, sit amet sollicitudin quam fringilla sed. Nam placerat lacinia est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer dignissim rutrum eros non consequat. Sed eu hendrerit enim. Curabitur ac nulla imperdiet, facilisis lorem pharetra, tempor enim. Donec at consequat magna. Sed elementum erat augue, eu mattis turpis ultricies id. Praesent vitae consequat lectus.
        Phasellus gravida velit eget enim pellentesque efficitur in vel nibh. Integer pretium felis nulla, in dignissim lorem egestas eget. Morbi vehicula ultrices commodo. Quisque in tincidunt est. Vivamus ac fermentum massa, commodo feugiat mi. Vivamus diam nunc, consectetur vitae odio vitae, interdum mattis diam. Curabitur porta dapibus neque convallis ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vestibulum mi nibh, at aliquam dolor vehicula nec. Etiam eu nisl rutrum, sollicitudin leo a, porttitor urna. Vestibulum pulvinar massa ac pharetra rhoncus.
        Nulla facilisi. Suspendisse et orci non tellus varius congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ornare diam in tellus faucibus dapibus at eu ligula. Curabitur facilisis nibh luctus dui venenatis, sit amet dignissim ex placerat. Vivamus dapibus sapien quis placerat volutpat. Donec auctor eros eget enim lobortis mattis. Sed in dolor viverra, imperdiet nisi non, venenatis quam. Vestibulum eu eros a velit semper consectetur eu id massa. Sed non lectus metus. In eu dictum enim. Praesent eu laoreet lacus, a hendrerit odio. Aliquam erat volutpat. Etiam ut leo eget tellus varius gravida. Mauris bibendum odio ut nisl scelerisque porttitor.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vulputate elit orci, eget pellentesque tortor consectetur at. Quisque bibendum convallis ipsum id ornare. Donec sagittis ex at quam convallis, interdum maximus eros pretium. Donec eget dapibus nibh. Mauris tortor leo, sagittis sit amet sem in, tristique ornare nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Nam urna libero, vehicula a commodo at, condimentum at metus. Vivamus sed volutpat erat. Aenean tempus lorem in arcu viverra tristique. Donec pharetra sit amet lacus at iaculis. Aliquam molestie justo non ante cursus aliquam. Pellentesque dui justo, eleifend in purus sed, placerat vehicula ex. Aenean eget nibh purus. Donec turpis nisl, interdum quis aliquam sit amet, molestie nec metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec pulvinar erat a elit luctus venenatis id sed est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque tempor vel nisl ac pretium. Duis pretium viverra eros ac fringilla.
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        content
        <section className='article-sidebar'>
          sidebar
        </section>
      </article>
    </main>
  );
}

export default Sample;

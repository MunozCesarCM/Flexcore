import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/vsc';

function App() {
  const [sidebarActive, setSidebarActive] = useState(true);
  return (
    <main>
      <Sidebar
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />
      <button className='sidebar-icon'>
        {sidebarActive ?
          (<VscArrowSmallLeft onClick={() => setSidebarActive(!sidebarActive)} />) :
          (<VscArrowSmallRight onClick={() => setSidebarActive(!sidebarActive)} />)}
      </button>
    </main>
  );
}

export default App;

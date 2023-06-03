import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import Headings from './pages/Headings';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(true);
  return (
    <main>
      <Topbar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      <Sidebar sidebarActive={sidebarActive} />
      <Routes>
        <Route path='/' element={<Home sidebarActive={sidebarActive} />} />
        <Route path='/getting-started' element={<GettingStarted sidebarActive={sidebarActive} />} />
        <Route path='/typography/headings' element={<Headings sidebarActive={sidebarActive} />} />
      </Routes>
    </main>
  );
}
export default App;

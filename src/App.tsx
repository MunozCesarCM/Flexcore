import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import TextFormatting from './pages/Typography/TextFormatting';
import ColorStyling from './pages/Typography/ColorStyling';
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
        <Route path='/typography/text-formatting' element={<TextFormatting sidebarActive={sidebarActive} />} />
        <Route path='/typography/color-and-styling' element={<ColorStyling sidebarActive={sidebarActive} />} />
      </Routes>
    </main>
  );
}
export default App;

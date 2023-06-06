import React, { useState, useEffect, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AppContext from './context/AppContext';

const Home = React.lazy(() => import('./pages/Home'));
const GettingStarted = React.lazy(() => import('./pages/GettingStarted'));
const TextFormatting = React.lazy(() => import('./pages/Typography/TextFormatting'));
const ColorStyling = React.lazy(() => import('./pages/Typography/ColorStyling'));

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(true);
  const [theme, setTheme] = useState('light');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <main>
        <Topbar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
        <Sidebar sidebarActive={sidebarActive} />
        <Suspense fallback={<div />}>
          <Routes>
            <Route path='/' element={<Home sidebarActive={sidebarActive} />} />
            <Route path='/getting-started' element={<GettingStarted sidebarActive={sidebarActive} />} />
            <Route path='/typography/text-formatting' element={<TextFormatting sidebarActive={sidebarActive} />} />
            <Route path='/typography/color-and-styling' element={<ColorStyling sidebarActive={sidebarActive} />} />
          </Routes>
        </Suspense>
      </main>
    </AppContext.Provider>
  );
}
export default App;

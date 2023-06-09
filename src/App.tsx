import React, { useState, useEffect, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AppContext from './context/AppContext';

const Home = React.lazy(() => import('./pages/Home'));
const GettingStarted = React.lazy(() => import('./pages/GettingStarted'));
const TextFormatting = React.lazy(() => import('./pages/Typography/TextFormatting'));
const ColorStyling = React.lazy(() => import('./pages/Typography/ColorStyling'));
const Sizing = React.lazy(() => import('./pages/Utilities/Sizing'));
const Layout = React.lazy(() => import('./pages/Utilities/Layout'));
const Spacing = React.lazy(() => import('./pages/Utilities/Spacing'));
const Interactivity = React.lazy(() => import('./pages/Utilities/Interactivity'));

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme) return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
}

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(null);
  const [siteTheme, setSiteTheme] = useState(getTheme);
  const [editorTheme, setEditorTheme] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem('theme', siteTheme);
  }, [siteTheme]);

  console.log();

  return (
    <AppContext.Provider value={{ sidebarActive, editorTheme, setSidebarActive, setEditorTheme, siteTheme }}>
      <main className={`theme-${siteTheme}`}>
        <Topbar siteTheme={siteTheme} setSiteTheme={setSiteTheme} />
        <Sidebar />
        <Suspense fallback={<div />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/getting-started' element={<GettingStarted />} />
            <Route path='/typography/text-formatting' element={<TextFormatting />} />
            <Route path='/typography/color-and-styling' element={<ColorStyling />} />
            <Route path='/utilities/sizing' element={<Sizing />} />
            <Route path='/utilities/layout' element={<Layout />} />
            <Route path='/utilities/spacing' element={<Spacing />} />
            <Route path='/utilities/interactivity' element={<Interactivity />} />
          </Routes>
        </Suspense>
      </main>
    </AppContext.Provider>
  );
}
export default App;

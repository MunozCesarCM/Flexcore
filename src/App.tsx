import React, { useState, useEffect, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AppContext from './context/AppContext';

const Home = React.lazy(() => import('./pages/Home'));
const GettingStarted = React.lazy(() => import('./pages/GettingStarted'));

const TextFormatting = React.lazy(() => import('./pages/Typography/TextFormatting'));
const ColorStyling = React.lazy(() => import('./pages/Typography/ColorStyling'));

const Google = React.lazy(() => import('./pages/Showcase/Google'));
const Twitter = React.lazy(() => import('./pages/Showcase/Twitter'));

const Buttons = React.lazy(() => import('./pages/FormsInputs/Buttons'));
const TextFields = React.lazy(() => import('./pages/FormsInputs/TextFields'));

const Container = React.lazy(() => import('./pages/Layouts/Container'));
const Grid = React.lazy(() => import('./pages/Layouts/Grid'));
const Flexbox = React.lazy(() => import('./pages/Layouts/Flexbox'));

const Borders = React.lazy(() => import('./pages/Utilities/Borders'));
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
  const { pathname } = useLocation();
  const [sidebarActive, setSidebarActive] = useState(window.innerWidth > 1700 && pathname !== '/');
  const [siteTheme, setSiteTheme] = useState(getTheme);
  const [editorTheme, setEditorTheme] = useState(siteTheme);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem('theme', siteTheme);
  }, [siteTheme]);

  return (
    <AppContext.Provider value={{ sidebarActive, editorTheme, setSidebarActive, setEditorTheme, siteTheme }}>
      <main className={`theme-${siteTheme}`}>
        <Topbar siteTheme={siteTheme} setSiteTheme={setSiteTheme} setEditorTheme={setEditorTheme} />
        <Sidebar />
        <Suspense fallback={<div className='w-screen h-screen' />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/getting-started' element={<GettingStarted />} />

            <Route path='/typography/color-and-styling' element={<ColorStyling />} />
            <Route path='/typography/text-formatting' element={<TextFormatting />} />

            <Route path='/showcase/google' element={<Google />} />
            <Route path='/showcase/twitter' element={<Twitter />} />

            <Route path='/forms-and-inputs/buttons' element={<Buttons />} />
            <Route path='/forms-and-inputs/text-fields' element={<TextFields />} />

            <Route path='/layouts/container' element={<Container />} />
            <Route path='/layouts/grid' element={<Grid />} />
            <Route path='/layouts/flexbox' element={<Flexbox />} />

            <Route path='/utilities/borders' element={<Borders />} />
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

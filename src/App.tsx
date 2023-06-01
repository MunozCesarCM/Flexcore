import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Sample from './pages/Sample';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/overview' element={<Overview />} />
      <Route path='/sample' element={<Sample />} />
    </Routes>
  );
}
export default App;

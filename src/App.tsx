import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Overview from './pages/Overview';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/overview' element={<Overview />} />
    </Routes>
  );
}
export default App;

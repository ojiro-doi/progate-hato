import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Directions from './pages/Directions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Map`} element={<Map />} />
        <Route path={`/Directions`} element={<Directions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
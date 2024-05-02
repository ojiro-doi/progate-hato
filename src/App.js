import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Map`} element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Result`} element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Search";
import Result from "./pages/Result";
import AccountPage from "./pages/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Result`} element={<Result />} />
        <Route path={`/Account`} element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

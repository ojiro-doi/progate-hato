import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Result from "./pages/Result";
import AccountPage from "./pages/Account";
import Notfound from "./pages/Notfound";
import { CountryProvider } from "./Context/CountryProvider";
import { ValuesProvider } from "./Context/ValuesProvider";

function App() {
  return (
    <ValuesProvider>
      <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/Search`} element={<Search />} />
          <Route path={`/Result`} element={<Result />} />
          <Route path={`/Account`} element={<AccountPage />} />
          <Route path={`*`} element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      </CountryProvider>
    </ValuesProvider>
  );
}

export default App;

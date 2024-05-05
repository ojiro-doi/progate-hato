import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Result from "./pages/Result";
import AccountPage from "./pages/Account";
import { CountryProvider } from "./Context/CountryProvider";
import { ValuesProvider } from "./Context/ValuesProvider";

function App() {
  return (
    <ValuesProvider>
      <CountryProvider>
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Search />} />
            <Route path={`/Result`} element={<Result />} />
            <Route path={`/Account`} element={<AccountPage />} />
          </Routes>
        </BrowserRouter>
      </CountryProvider>
    </ValuesProvider>
  );
}

export default App;

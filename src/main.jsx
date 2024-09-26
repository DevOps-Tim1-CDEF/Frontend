import "./index.css";

import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { SearchProvider } from "./contexts/SearchProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        <Routes>
          <Route path="/StuckOverBug/*" element={<App />} />
        </Routes>
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
)

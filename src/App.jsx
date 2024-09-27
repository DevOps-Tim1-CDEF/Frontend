import "./App.css";

import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import PublicLayout from './layouts/PublicLayout';
import RequireAuth from "./utils/RequiredAuth";

import Welcome from './pages/Welcome';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostThread from "./pages/Post";

const App = () => {

  const url = useLocation();

  useEffect(() => {
    // scroll to top setiap pindah halaman
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [url.pathname])

  return <>
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="thread/:id">
          <Route index element={<Welcome />} />
        </Route>
        <Route path="auth">
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* <Route path="/pathname">
          <Route index element={<Welcome />} />
        </Route> */}
      </Route>

      <Route element={<RequireAuth />}>
        <Route path="/user" element={<PublicLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/pathname">
            <Route index element={<Welcome />} />
          </Route> */}
          <Route path="thread/post">
            <Route index element={<PostThread />} />
          </Route>
        </Route>
      </Route>
      
      <Route path="*" element={<Welcome />} />
    </Routes>
  </>
}

export default App;

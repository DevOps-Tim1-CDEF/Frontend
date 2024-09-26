import "./App.css";

import { Route, Routes } from "react-router-dom";

import PublicLayout from './layouts/PublicLayout';

import Welcome from './pages/Welcome';
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostThread from "./pages/Post";

const App = () => {
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
          <Route path="register" element={<Welcome />} />
        </Route>
        {/* <Route path="/pathname">
          <Route index element={<Welcome />} />
        </Route> */}
      </Route>

      <Route path="/user" element={<PublicLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/pathname">
          <Route index element={<Welcome />} />
        </Route> */}
        <Route path="thread/post">
          <Route index element={<PostThread />} />
        </Route>
      </Route>
      
      <Route path="*" element={<Welcome />} />
    </Routes>
  </>
}

export default App

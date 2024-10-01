import "./layout.css";

import { useContext, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthProvider";
import SearchContext from "../contexts/SearchProvider";
import { useLogout } from "../hooks/useAuth";

import { Avatar } from "@mui/material";
import { FcSearch } from "react-icons/fc";
import { GoHome } from "react-icons/go";

import { baseUrl } from "../utils/format";

import ProfileModal from "../components/modals/Profile";
import ProfilePicture from "../components/cards/Profpic";

const PublicLayout = () => {
  const { isLogin, loginData } = useContext(AuthContext);
  const logout = useLogout();
  
  const { showSearch, setShowSearch, searchVal, setSearchVal, setFilter } = useContext(SearchContext);

  const url = useLocation();

  const searchThreads = (e) => {
    e.preventDefault();
    console.log(searchVal);
    
    setFilter(searchVal);
  }

  useEffect(() => {
    setShowSearch(url.pathname == "/StuckOverBug/");
  }, [url.pathname]);

  return <>
    <div className="d-flex flex-column justify-content-between">
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dar bg-blac navbar-trans bg-light shadow shadow-sm rounded-bottom p-1 px-md-5">
          <div className="container-fluid mx-xl-5 px-xxl-5">
            <NavLink className="navbar-brand col-auto" to={`${baseUrl}/`}>
              <img src={`${baseUrl}/assets/img/Bug3.jpeg`} alt="Logo" className="rounded" width={45}/>
              <span className="mx-1 text-decoration-underline fst-italic d-none d-sm-inline">StuckOverBug</span>
            </NavLink>
            {
              showSearch? (
                <>
                  <form className="d-flex container-fluid p-0 col my-2" onSubmit={searchThreads}>
                    <input 
                      type="search" 
                      className="form-control me-2" 
                      placeholder="Type your question here..." 
                      aria-label="Search" 
                      name="search" 
                      value={searchVal}
                      onChange={(e) => {
                        setSearchVal(e.target.value);
                        if (!e.target.value) setFilter("");
                      }}
                    />
                    <button className="btn p-1 pt-0" type="submit"><FcSearch size={30} /></button>
                  </form>
                  <span className="mx-3 mb-2 fs-3 lead text-secondary">|</span>
                </>
              ) : (
                <>
                  <NavLink className="nav-link text-primar text-center align-items-center" to={`${baseUrl}/`} aria-current="page">
                    <GoHome size={30} /> 
                    <p className="small m-0">Go to Home</p>
                  </NavLink>
                </>
              )
            }
            <div className="d-inline-flex align-items-center gap-2">
              {
                isLogin? (
                  <>
                    <h6 className="text-nowrap m-0 fw-normal d-md-block d-none">Hi, {loginData.nama}!</h6>
                    <Avatar
                      role="button"
                      data-bs-toggle="modal"
                      data-bs-target="#profileModal"
                      // data-bs-backdrop="static"
                      // data-bs-keyboard="false"
                      title={`Login as ${loginData.username}`}
                      className="ratio ratio-1x1 bg-danger"
                    >
                      <ProfilePicture data={loginData} />
                    </Avatar>
                    <button className="btn btn-outline-danger d-sm-block d-none" type="button" onClick={logout}>
                      LOGOUT
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink className="btn btn-outline-danger" to={`${baseUrl}/auth/login`}>
                      LOGIN
                    </NavLink>
                    <NavLink className="btn btn-outline-success d-md-block d-none" to={`${baseUrl}/auth/register`}>
                      SIGN UP
                    </NavLink>
                  </>
                )
              }
            </div>
          </div>
        </nav>
      </header>
      { isLogin? <ProfileModal /> : <></> }

      <main>
        <Outlet />
      </main>

      <footer className="p-2 bg-black text-light text-center">
        Copyright &copy; 2024 by (AB)CDEF. All Right Reserved.
      </footer>
    </div>
  </>
}

export default PublicLayout;
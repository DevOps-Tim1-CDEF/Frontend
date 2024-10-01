import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin, useLogout } from "../hooks/useAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import Swal from "sweetalert2";
import { findUser } from "../utils/DataUsers";
import { baseUrl, mainUrl } from "../utils/format";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  // const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const logout = useLogout();
  const login = useLogin();

  useEffect(() => {
    const uname_from_session = sessionStorage.getItem("uname");
    setUsername(uname_from_session || "");
    sessionStorage.removeItem("uname");

    logout();
  }, []);

  const signin = async (e) => {
    e.preventDefault();
    const form = document.querySelector(".needs-validation");
    form.classList.add("was-validated");

    try {
      if (form.checkValidity() == true) {
        Swal.fire({
          title: "Please Wait...",
          text: "We're trying to signing you in ^^",
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: false,
          willOpen: async () => {
            Swal.showLoading();
            const res = await axios.post(`${mainUrl}user/login`, { username, password });
            const data = res.data;
            if (data) {
              Swal.close();
              nav(`${baseUrl}/`);
              login(data);
            }
          }
        })
      } else {
        Swal.fire({
          icon: "warning",
          title: "Empty Field!",
          text: "Please fill in your Login info",
          // confirmButtonColor: "#00b6db",
        });
      }
    } catch (error) {
      if (error.response){
        const {title, message} = error.response.data;
        Swal.fire({
          icon: "error",
          title: title,
          text: message,
          // confirmButtonColor: "#00b6db",
        });
      } else {
        console.log("error", error);
      }
    }
    
  };

  return (
    <>
      <div className="py-4 bg-dark vh-100">
        <div className="row row-gap-1 m-0">
          <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
            <div className="border rounded shadow mt-1 px-3 pb-3 bg-black">
              <div className="row g-0 m-0">
                <div className="col-md-5">
                  <NavLink className="text-center" to={`${baseUrl}/`} aria-current="page">
                    <img
                      src={`${baseUrl}/assets/img/Bug3.jpeg`}
                      className="img-fluid"
                      alt="logo"
                    />
                  </NavLink>
                </div>
                <div className="col pt-4 pe-md-3">
                  <form
                    onSubmit={signin}
                    className="needs-validation"
                    noValidate
                  >
                    <label htmlFor="username" className="fw-bold text-white mb-2">USERNAME</label>
                    <div className="form-floating mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="my_sob_username" 
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <div className="invalid-feedback">Please fill in this field</div>
                      <label htmlFor="username">ur_sob_username</label>
                    </div>
                    <label htmlFor="username" className="fw-bold text-white mb-2">PASSWORD</label>
                    <div className="d-flex align-items-center">
                      <div className="container-fluid ps-0 form-floating">
                        <input 
                          type={visible? "text" : "password"} 
                          className="form-control" 
                          id="password" 
                          placeholder="pass***d" 
                          required 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">Please fill in this field</div>
                        <label htmlFor="password">pass***d</label>
                      </div>
                      <span
                        className="text-white"
                        role="button"
                        title={visible? "Sembunyikan" : "Tampilkan"}
                        onClick={() => setVisible(!visible)}
                      >
                        {visible? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}
                      </span>
                    </div>
                    {/* <div className="text-end mt-2">
                      <NavLink to={`${baseUrl}/auth/forget`} aria-current="page" className="text-decoration-none text-white link-warning fst-italic fw-semibold font-raleway">
                        Forget Password
                      </NavLink>
                    </div> */}
                    <div className="text-end mt-4">
                      <div className="d-grid gap-3">
                        <button className="btn btn-outline-info btn-light text-dark" type="submit">LOGIN</button>
                        <NavLink to={`${baseUrl}/auth/register`} className="btn btn-outline-warning btn-light text-dark">
                        Don't have any account? Register Now
                        </NavLink>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
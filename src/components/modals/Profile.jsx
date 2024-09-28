import { useContext, useEffect, useState } from "react";

import AuthContext from "../../contexts/AuthProvider";
import { useLogout } from "../../hooks/useAuth";
import { emptyUser } from "../../utils/DataUsers";

import { MdOutlineMarkEmailRead } from "react-icons/md";

const ProfileModal = ({}) => {
  const { loginData } = useContext(AuthContext);
  const logout = useLogout();
  
  const [data, setData] = useState(emptyUser);

  useEffect(() => {
    setData(loginData);
  }, []);

  return <>
    <div
      className="modal fade"
      id="profileModal"
      aria-labelledby="profileModal"
      aria-hidden="true"
      // tabIndex="-1"
      // data-bs-backdrop="static"
      // data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body align-items-center">
            <div className="card border-2 border-dark shadow p-2 mb-3">
              <div className="position-relative">
                <hr className="border-danger border-3 mt-2 mb-0" />
                <hr className="border-danger border-3 my-1" />
                <hr className="border-danger border-3 my-0" />
                <div className="position-absolute top-50 start-50 translate-middle mt-2">
                  <h4 className="position-relative bg-white px-2 text-nowrap">STUCK OVER BUG</h4>
                </div>
              </div>
              <h6 className="text-center text-muted mt-1 mb-0">~ Identity Card ~</h6>
              <hr className="border-2 border-dark my-1" />
              <div className="row g-0">
                <div className="col-4 p-2">
                  <img src={data.profile} className="img-fluid rounded" alt="No Profpic" />
                </div>
                <div className="col-8">
                  <div className="card-body pe-0">
                    <h5 className="card-title mb-0">Hi, I'm <span className="fw-bold text-primary">{data.username}</span>!</h5>
                    <p className="card-text">But in real life, people actually call me <span className="fw-bold text-primary">{data.realname}</span>, hehe :D</p>
                    <p className="card-text text-muted text-nowrap text-truncate">
                      <MdOutlineMarkEmailRead size={20} className="me-2" />
                      <a href={`mailto:${data.email}`} target="_blank" className="text-decoration-none">{data.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-start">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
            <div className="float-end">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={logout}
              >
                LOGOUT
              </button>
            </div>
          </div>
          {/* <div className="modal-footer"></div> */}
        </div>
      </div>
    </div>
  </>
}

export default ProfileModal;
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthProvider";

import { Fab } from "@mui/material";

import { baseUrl } from "../utils/format";
import { threads } from "../utils/DataThreads";
import ThreadCard from "../components/cards/Thread";

const Home = () => {
  const [data, setData] = useState();

  const { isLogin } = useContext(AuthContext);

  const nav = useNavigate();

  const navToPost = () => {
    if (isLogin) {
      nav("user/thread/post");
    } else {
      nav(`${baseUrl}/auth/login`);
    }
  }

  useEffect(() => {
    setData(threads);
  }, []);

  return (
    data? (
      <div className="container-fluid py-3">
        {
          data.filter((thread) => thread.type == "question").map((thread) =>
            <div key={thread.id} className="row justify-content-center mb-3">
              <NavLink className="col col-xxl-8 col-lg-9 col-md-10 text-decoration-none" to={`thread/${thread.id}`}>
                <ThreadCard data={thread} />
              </NavLink>
            </div>
          )
        }

        <div className="position-fixed bottom-0 end-0 pb-3 pe-4 pb-sm-4 pe-sm-5" style={{zIndex: 100}} title="ASK">
          <Fab color="error" aria-label="top" sx={{ width: 80, height: 80 }} onClick={navToPost}>
            <img src="assets/img/Sirene.png" alt="ASK" className="img-fluid object-fit-cover" />
          </Fab>
        </div>
      </div>
    ) : <></>
  )
}

export default Home;
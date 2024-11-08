import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchContext from "../contexts/SearchProvider";

import { Fab } from "@mui/material";

import { getThreads } from "../utils/DataThreads";
import ThreadCard from "../components/cards/Thread";
import Loading from "../components/loaders/Loading";

const Home = () => {
  const [data, setData] = useState();

  const nav = useNavigate();
  
  const { filter } = useContext(SearchContext);

  useEffect(() => {
    getThreads(filter.trim()).then(res => {
      setData(res);
    })
    
  }, [filter]);
  
  return (
    data? (
      data.length? (
        <div className="container-fluid py-3">
          {
            data.map((thread) =>
              <div key={thread._id} className="row justify-content-center mb-3">
                <NavLink className="col col-xxl-8 col-lg-9 col-md-10 text-decoration-none" to={`thread/${thread._id}`}>
                  <ThreadCard data={thread} />
                </NavLink>
              </div>
            )
          }

          <div className="position-fixed bottom-0 end-0 pb-3 pe-4 pb-sm-4 pe-sm-5" style={{zIndex: 100}} title="Post a Thread">
            <Fab color="error" aria-label="top" sx={{ width: 80, height: 80 }} onClick={() => nav("user/thread/post")}>
              <img src="assets/img/Sirene.png" alt="ASK" className="img-fluid object-fit-cover" />
            </Fab>
          </div>
        </div>
      ) : (
        filter? <>
          <div className="vh-100 d-flex align-items-center justify-content-center">
            <h5 className="mb-5">
              Can't find any thread with "{filter}" keyword :')
            </h5>
          </div>
        </> : <>
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <h5>No Thread</h5>
          </div>
        </>
      )
    ) : <Loading />
  )
}

export default Home;
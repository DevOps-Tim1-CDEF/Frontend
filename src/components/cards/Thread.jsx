import "./thread.css";

import moment from "moment";

import { Avatar } from "@mui/material";
import { userDetail } from "../../utils/DataUsers";
import { statusColor } from "../../utils/DataThreads";

const ThreadCard = ({ data }) => {
  return <>
    <div className={`card border-2 border-${statusColor(data.status)} shadow-sm`}>
      <div className="card-body">
        <div className="row m-0 gap-2 align-items-start">
          <div className="col-auto p-0">
            <Avatar
              role="button"
              // data-bs-toggle="modal"
              // data-bs-target="#profileModal"
              // data-bs-backdrop="static"
              // data-bs-keyboard="false"
              title="View Detail"
              className="ratio ratio-1x1"
            >
              <img src={userDetail(data.author).profile} alt="pic" className="img-fluid object-fit-cover" />
            </Avatar>
          </div>
          <div className="col-auto p-0">
            <h6 className="card-title mb-0">{userDetail(data.author).realname}</h6>
            <p className="card-title mb-0 small text-secondary">@{userDetail(data.author).username}</p>
          </div>
          <div className="col text-end">
            <p className="small mb-0">{moment(data.time).format("DD MMMM yyyy HH:mm")}</p>
          </div>
        </div>
        {/* <p className="card-text mt-2 overflow-ellipsis-3">
          {data.contents}
        </p> */}
        <div
          className="card-text mt-2 overflow-ellipsis-3"
          dangerouslySetInnerHTML={{ __html: data.contents }}
        />
      </div>
    </div>
  </>
}

export default ThreadCard;
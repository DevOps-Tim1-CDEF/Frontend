import "./thread.css";

import { Avatar } from "@mui/material";

import { statusColor } from "../../utils/DataThreads";
import { datetimeFormat } from "../../utils/format";

import ProfilePicture from "./Profpic";

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
              className="ratio ratio-1x1 bg-danger"
            >
              <ProfilePicture data={data.author} />
            </Avatar>
          </div>
          <div className="col-auto p-0">
            <h6 className="card-title mb-0">{data.author.nama}</h6>
            <p className="card-title mb-0 small text-secondary">@{data.author.username}</p>
          </div>
          <div className="col text-end">
            <p className="small mb-0">{datetimeFormat(data.time, "DD MMMM yyyy HH:mm")}</p>
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
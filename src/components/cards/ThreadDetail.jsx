import { Avatar } from "@mui/material";

import { datetimeFormat } from "../../utils/format";
import { statusName } from "../../utils/DataThreads";

import ProfilePicture from "./Profpic";

const ThreadDetailCard = ({ data, level, isi }) => {
  return <>
    <div className="border rounded p-3 pb-0 mb-2">
      <div className="row m-0 gap-2 align-items-start">
        <div className="col-auto p-0">
          <Avatar
            role="button"
            className="ratio ratio-1x1 bg-danger"
          >
            <ProfilePicture data={data.author} />
          </Avatar>
        </div>
        <div className="col-auto p-0">
          <h6 className="card-title mb-0">{data.author.nama}</h6>
          <p className="card-title mb-0 small text-secondary">@{data.author.username}</p>
        </div>
      </div>
      <div className="d-flex flex-wrap m-0 mt-2">
        <div className="col p-0">
          <p className="small mb-0 text-nowrap"><span className="text-secondary me-1">Posted on</span> {datetimeFormat(data.time, "DD MMMM yyyy HH:mm")}</p>
        </div>
        <div className="col p-0">
          <p className="small mb-0 text-nowrap"><span className="text-secondary me-1">Status</span> {statusName[level || data.status]}</p>
        </div>
      </div>
      <div
        className="card-text mt-2"
        dangerouslySetInnerHTML={{ __html: isi || data.contents }}
      />
    </div>
  </>
}

export default ThreadDetailCard;
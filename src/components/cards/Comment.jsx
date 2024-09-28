import { userDetail } from "../../utils/DataUsers";
import { datetimeFormat } from "../../utils/format";

const CommentCard = ({ data }) => {
  return <>
    <div className="d-flex flex-wrap justify-content-between">
      <p className="mb-0 small fw-bold">
        @{userDetail(data.author).username}
      </p>
      <p className="mb-0 small text-secondary text-end">
        {datetimeFormat(data.time)}
      </p>
    </div>
    <p className="mb-2">{data.contents}</p>
  </>
}

export default CommentCard;
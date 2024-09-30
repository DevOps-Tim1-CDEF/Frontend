import { CodeBlock } from "react-code-block";

import { Avatar } from "@mui/material";
import { FaCode } from "react-icons/fa6";

import { datetimeFormat } from "../../utils/format";

import ProfilePicture from "./Profpic";

const ReplyCard = ({ data }) => {
  return <>
    {/* THREAD */}
    <div className="card mb-2">
      <div className="card-header">
        <div className="row m-0 mt-1 gap-2 align-items-start">
          <div className="col-auto p-0">
            <Avatar
              role="button"
              className="ratio ratio-1x1 bg-danger"
            >
              <ProfilePicture data={data.author} />
            </Avatar>
          </div>
          <div className="col-auto p-0">
            <h6 className="card-title mb-0">
              {data.author.realname}
              <span className="small text-secondary"> (@{data.author.username})</span>
            </h6>
            {/* <p className="card-title mb-0 small text-secondary"></p> */}
            <p className="small mt-1 mb-0 text-nowrap"><span className="text-secondary me-1">Reply on</span> {datetimeFormat(data.time, "DD MMMM yyyy HH:mm")}</p>
          </div>
        </div>
      </div>
      <div className="card-body pb-0">
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: data.contents }}
        />
        {/* SNIPPET */}
        {
          data.snippets.length? <>
            <ul className="nav nav-tabs" id="snippetTab" role="tablist">
              <li className="nav-item me-1" role="presentation">
                <button
                  className="nav-link active pb-0"
                  id={`snippet-rep${data.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#snippet-rep${data.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`snippet-rep${data.id}`}
                  aria-selected="true"
                >
                  <FaCode className="mb-1 me-2" /> {data.snippets[0].filename}
                </button>
              </li>
            </ul>
            <div className="tab-content px-3 mb-3 border border-top-0 rounded-bottom">
              <div
                className="tab-pane fade show active pt-3"
                id={`snippet-rep${data.id}`}
                role="tabpanel"
                aria-labelledby={`snippet-rep${data.id}-tab`}
              >
                <CodeBlock code={data.snippets[0].code} language={data.snippets[0].type}>
                  <CodeBlock.Code className="bg-dark px-4 py-3 rounded shadow-sm">
                    <div className="table-row">
                      <CodeBlock.LineNumber className="table-cell pe-3 text-secondary" />
                      <CodeBlock.LineContent className="table-cell">
                        <CodeBlock.Token />
                      </CodeBlock.LineContent>
                    </div>
                  </CodeBlock.Code>
                </CodeBlock>
              </div>
            </div>
          </> : <></>
        }
      </div>
    </div>
  </>
}

export default ReplyCard;
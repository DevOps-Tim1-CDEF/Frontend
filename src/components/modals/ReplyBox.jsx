import { useContext, useState } from "react";
import { CodeBlock } from "react-code-block";
import AuthContext from "../../contexts/AuthProvider";

import { CgTrashEmpty } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

import Swal from "sweetalert2";

const ReplyBox = ({ addReply, postId, parent, depth }) => {
  const [answer, setAnswer] = useState("");
  const [snippet, setSnippet] = useState("");
  const [filename, setFilename] = useState("");
  const [type, setType] = useState("");

  const { loginData } = useContext(AuthContext);

  const snippetValidation = () => {
    // check if user has snippet, all the filename, type, and snippet code should not be empty;
    const andGate = snippet != "" && filename != "" && type != "";
    const orGate = snippet != "" || filename != "" || type != "";
    return andGate === orGate;
  }

  const postingAnswer = async (e) => {
    e.preventDefault();
    
    if (answer.trim() != "") {
      if (snippetValidation()){
        let contentData = {
          postId: postId,
          author: loginData._id,
          parentId: parent,
          depth: depth,
          contents: `<p>${answer}</p>`,
          status: 2, //to differentiate reply and comment, reply's status is always 2,
        }
        if (snippet != ""){
          contentData.snippets = [
            {
              filename: filename,
              type: type,
              code: snippet,
            },
          ];
        }
        await addReply(contentData);
        document.getElementById("close-reply").click();
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Empty Snippet Field!",
          text: "Fill in the filename, language, and code if you want to include this snippet! X(",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Empty Answer",
        text: "You must write down your answer so the SOBug Asker can solve their code. X(",
      });
    }
  }

  const discard = () => {
    setAnswer("");
    setFilename("");
    setType("");
    setSnippet("");
  }

  return <>
    <div
      className="modal fade"
      id="replyModal"
      // tabIndex="-1"
      aria-labelledby="replyModal"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body align-items-center">
            {/* Answer */}
            <h5>Reply Your Answer</h5>
            <textarea 
              name="reply-answer" 
              id="reply-answer" 
              className="form-control"
              rows={4}
              placeholder="Type your answer here..."
              value={answer} 
              onChange={(e) => setAnswer(e.target.value)} 
            />
            {/* Code Snippet */}
            <h5 className="mt-3">Code Snippet</h5>
            <div className="row g-2 pb-2">
              <div className="col">
                <input 
                  type="text" 
                  name="filename-" 
                  id="filename-" 
                  className="form-control" 
                  placeholder="filename.ext"
                  value={filename} 
                  onChange={(e) => setFilename(e.target.value)} 
                />
              </div>
              <div className="col-xl-4 col-md-5 col-sm-6 col">
                <select name="type-" id="type-" className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                  {/* cpp, python, html, css, js, jsx, ts, tsx, json, yaml, yml, xml, md */}
                  <option value="" disabled>- Choose Language -</option>
                  <option value="text">Language: Text</option>
                  <option value="python">Language: Python</option>
                  <option value="html">Language: HTML</option>
                  <option value="css">Language: CSS</option>
                  <option value="js">Language: JS</option>
                  <option value="jsx">Language: JSX</option>
                  <option value="ts">Language: TS</option>
                  <option value="tsx">Language: TSX</option>
                  <option value="json">Language: JSON</option>
                  <option value="yaml">Language: YAML</option>
                  <option value="yml">Language: YML</option>
                  <option value="xml">Language: XML</option>
                  <option value="md">Language: MD</option>
                  </select>
              </div>
            </div>
            <textarea 
              className="form-control"
              name="snippet-reply" 
              id="snippet-reply" 
              rows={4}
              placeholder="Type your code here..."
              value={snippet} 
              onChange={(e) => setSnippet(e.target.value)} 
            />
            <h6 className="text-center text-primary mt-2"><span className="text-danger">NOTE:</span> Use {"<space>"} as alternate of {"<tab>"}</h6>

            {
              snippet.trim() || filename.trim()? <>
                <ul className="nav nav-tabs" id="snippetTab1" role="tablist">
                  <li className="nav-item me-1" role="presentation">
                    <button
                      className="nav-link active pb-0"
                      id="snippet-1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#snippet-1"
                      type="button"
                      role="tab"
                      aria-controls="snippet-1"
                      aria-selected="true"
                    >
                      <FaCode className="mb-1 me-2" /> {filename}
                    </button>
                  </li>
                </ul>
                <div className="tab-content px-3 mb-2 border border-top-0 rounded-bottom">
                  <div
                    className="tab-pane fade show active pt-3"
                    id="snippet-1"
                    role="tabpanel"
                    aria-labelledby="snippet-1-tab"
                  >
                    <CodeBlock code={snippet} language={type}>
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
          <div className="modal-footer row m-0 p-2">
            <div className="col">
              <button
                id="close-reply"
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
                onClick={discard}
              >
                <CgTrashEmpty className="mb-1" /> Discard
              </button>
            </div>
            <div className="col text-end">
              <button
                type="button"
                className="btn btn-primary shadow-sm"
                onClick={postingAnswer}
              >
                <IoSend size={16} className="mb-1 me-1" /> POST ANSWER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default ReplyBox;
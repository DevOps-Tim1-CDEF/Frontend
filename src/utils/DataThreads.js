import axios from "axios";
import { mainUrl } from "../utils/format";
import { emptyUser } from "./DataUsers";

export let threads = [
  {
    id: 0,
    type: "question",
    author: 1,
    contents: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum labore, quaerat saepe eius ducimus suscipit cumque modi dolorum? Eius delectus voluptas dolore, beatae vero laborum nostrum soluta mollitia fuga.</p>",
    snippets: [
      {
        filename: "filename1",
        type: "type1",
        code: "snippet1",
      },
      {
        filename: "filename2",
        type: "type2",
        code: "snippet2",
      },
      {
        filename: "filename3",
        type: "type3",
        code: "snippet3",
      },
    ],
    status: 3,
    time: new Date(),
  },
  {
    id: 1,
    type: "reply",
    ref: 0,
    author: 0,
    contents: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vitae rem, suscipit quo autem ducimus atque, adipisci veritatis velit similique ipsam. Consequatur sunt earum quasi placeat. Itaque voluptates omnis nam. Optio dicta deserunt impedit deleniti provident, id a ipsam voluptatibus enim quam dolore ipsa doloribus nihil eos minus placeat illum quo quibusdam! Impedit temporibus voluptas magnam unde quidem, commodi nemo fuga quibusdam sint, hic eligendi similique illo error fugit? Inventore laudantium unde quos? Nostrum! Nemo laboriosam ex numquam sequi inventore. Nobis eligendi nostrum dolorem quae ab, saepe aperiam itaque quidem vitae neque, doloremque maxime, cum aliquid! Minima excepturi totam adipisci fugit? Odit vero, amet itaque perspiciatis facere corporis placeat quaerat, in at, maiores animi maxime natus a. Sit!</p>",
    snippets: [],
    time: new Date(),
  },
  {
    id: 2,
    type: "question",
    author: 0,
    contents: "<p>Natus sit fugit sunt, deleniti iusto dicta maiores doloribus! Doloremque eos autem saepe repudiandae culpa, illo debitis sit! Quia autem incidunt nostrum. Quam, repudiandae excepturi aspernatur cupiditate ullam placeat. Quisquam sit dicta recusandae natus ipsa fugiat enim odit inventore distinctio ab expedita, deleniti laborum! Sint maxime perspiciatis rerum odio, aliquid explicabo fuga vel quo labore, nobis est molestias. Veniam facilis optio, doloribus ad aspernatur voluptatem totam?</p>",
    snippets: [],
    status: 1,
    time: new Date(),
  },
  {
    id: 3,
    type: "question",
    author: 0,
    contents: "<p>Suscipit delectus cumque sint dolor labore quasi eligendi libero officiis neque possimus accusantium cum consequatur vel, recusandae reiciendis eius laboriosam saepe? Doloribus? Id possimus magnam error itaque omnis rem nihil ex, deleniti animi est libero quasi. Repellat rerum voluptatem itaque? Accusamus dolor necessitatibus ratione. Rem provident corporis a, fugiat recusandae dolorum debitis excepturi itaque vero qui eos earum ab, consectetur voluptatem, repudiandae deserunt aliquid nostrum blanditiis? Voluptatibus nostrum labore inventore. Ipsa nemo incidunt, corporis cumque eveniet voluptas consequuntur consectetur aspernatur quos inventore iure molestiae vero nobis officiis itaque. Repellat iure reprehenderit ad odio autem quaerat nulla voluptas at minima earum? Quis aliquid temporibus perspiciatis laudantium nihil porro vero nostrum! Qui.</p>",
    snippets: [],
    status: 2,
    time: new Date(),
  },
  {
    id: 4,
    type: "question",
    author: 2,
    contents: "<p>Vel, soluta qui? Autem eveniet cum deleniti rerum officia ad ab praesentium similique, tenetur, unde cupiditate aut natus doloribus accusamus quod eius! Quod nesciunt, odit corporis deleniti aliquam voluptas accusantium sequi! Blanditiis labore, totam, quisquam saepe facere distinctio id quam, illo ab officiis ullam. At ea corrupti placeat! Sequi laboriosam earum, libero voluptate repellat quam? Iure quisquam exercitationem consequatur a aperiam suscipit enim. Adipisci, tempore. Voluptatibus.</p>",
    snippets: [],
    status: 0,
    time: new Date(Date.now() + 960000),
  },
  {
    id: 5,
    type: "reply",
    ref: 0,
    author: 2,
    contents: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sapiente quae suscipit. Sunt ullam magni error. Quas modi, quo porro optio explicabo, ratione, officia perspiciatis odit asperiores adipisci esse recusandae? Illo, cumque corrupti placeat tempore a natus necessitatibus laborum minus, veritatis perferendis autem totam, dolore beatae! Veritatis fuga quo necessitatibus facere delectus. Velit tempore fugit laboriosam perspiciatis est nisi officiis! Eius nam placeat, iure amet cumque maiores aspernatur. Delectus quam repellendus reiciendis ea reprehenderit.</p>",
    snippets: [
      {
        filename: "filenamex",
        type: "typex",
        code: "snippetx",
      }
    ],
    time: new Date(),
  },
]

export const emptyThread = {
  id: -1,
  type: "",     // [question, reply]
  ref: -1,      // question id
  depth: -1,
  author: emptyUser,   // author id
  contents: "", // html
  snippets: [], // list of filename, type, code
  status: -1,   // [3: Urgent banget (danger), 2: Nanya aja (warning), 1: Iseng doank (success/ primary), 0: Ditutup (secondary)]
  time: "",
}

// TODO add proper return when error
export const getThreads = async () => {
  try {
    const data = await axios.get(`${mainUrl}thread`).then((res) => res.data);
    const threads = data.data;
    return threads.sort((a, b) => b.status - a.status);
  } catch (error) {
    console.log(error);
    return {};
  }
}

export const postThread = async (data) => {
  try {
    const res = await axios.post(`${mainUrl}thread`, data,
      {
        headers: {
          'Authorization': sessionStorage.getItem('token'),
        }
      }
    )
    return res.data.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export const findThread = async (id) => {
  try {
    const data = await axios.get(`${mainUrl}thread/${id}`).then((res) => res.data);
    const threads = data.data;
    const replyComment = threads.filter((thread) => thread.depth == 2);
    return {
      thread: threads.find((thread) => thread.depth == 1) || emptyThread,
      replies: (replyComment.filter((thread) => thread.status == 2)).sort((a, b) => b.id - a.id),
      comments: (replyComment.filter((thread) => thread.status == 1)).sort((a, b) => b.id - a.id),
    };
  } catch (error) {
    console.log(error);
    return {
      thread: emptyThread,
      replies: emptyThread,
      comments: emptyThread,
    };
  }
}

export const statusColor = (statusCode) => {
  switch (statusCode) {
    case 3:
      return "danger";
    case 2:
      return "warning";
    case 1:
      return "info";
    case 0:
      return "";
    default:
      return "primary";
  }
}

export const statusName = {
  "-1": "Not Found",
  0: "Closed",
  1: "Iseng Doank",
  2: "Nanya Aja",
  3: "Urgent Buanget",
}
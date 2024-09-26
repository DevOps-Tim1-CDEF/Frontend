import { baseUrl } from "./format";

let users = [
  {
    id: 0,
    username: "sobug",
    password: "molla",
    realname: "Stuck Over Bug",
    profile: `${baseUrl}/assets/img/Bug3.jpeg`,
    email: "stuck@over.bug",
    active: 1,
  },
  {
    id: 1,
    username: "ask_sob",
    password: "buzidao",
    realname: "Ask Over Bug",
    profile: `${baseUrl}/assets/img/Bug1.jpeg`,
    email: "ask@over.bug",
    active: 1,
  },
  {
    id: 2,
    username: "who_am_1",
    password: "nuguseyoo",
    realname: "Secret Helper",
    profile: `${baseUrl}/assets/img/Bug5.jpeg`,
    email: "secret@helper.boom",
    active: 1,
  },
]

const emptyUser = {
  id: -1,
  username: "Who?",
  password: "",
  profile: "https://i.pinimg.com/originals/8f/6d/5c/8f6d5c365c7c29d9dab1ad219ca8eb70.jpg",
  realname: "Who am I?",
  email: "who@m.i",
  active: 1,
}

const userDetail = (id) => {
  return users.find((user) => user.id == id);
}

const findUser = (username, password) => {
  return users.find((user) => user.username == username && user.password == password);
}

export {
  users, emptyUser, userDetail, findUser
}
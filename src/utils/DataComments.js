export let comments = [
  {
    id: 0,
    author: 1,
    ref: 0,
    contents: "Letsgoooo",
    time: new Date(),
  },
  {
    id: 1,
    author: 0,
    ref: 0,
    contents: "Commodi dolores eum nesciunt sit delectus. Non fugit optio earum? Velit est maiores fuga hic magnam repudiandae nam eum tempore saepe soluta.",
    time: new Date(),
  },
  {
    id: 2,
    author: 0,
    ref: 0,
    contents: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    time: new Date(),
  },
  {
    id: 3,
    author: 2,
    ref: 0,
    contents: "Distinctio, nobis! Laboriosam pariatur asperiores deleniti explicabo porro, quasi illum.",
    time: new Date(),
  },
  {
    id: 4,
    author: 1,
    ref: 0,
    contents: "Asperiores sit eveniet minus omnis consequuntur voluptate voluptatum, mollitia similique blanditiis sint.",
    time: new Date(),
  },
]

export const emptyComment = {
  id: -1,
  author: -1,
  ref: -1,
  contents: "",
  time: "",
}

export const getComments = (refId) => {
  return comments.filter((comment) => comment.ref == refId).sort((a, b) => b.id - a.id);
}

export const postComment = (data) => {
  comments.push({ ...data, id: comments.length, time: new Date() });
  return comments.find((comment) => comment.id == comments.length - 1);
}
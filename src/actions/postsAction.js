export const FETCH_POSTS = "FETCH_POSTS"
export const NEW_POST = "NEW_POST"

export const fetchPost = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    )
}
export const createPost = (post) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post,
      })
    )
}

const useFetchPost = (url, reqMethod, body) => {
  fetch(url, {
    method: reqMethod,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
    .then(() => 'done');
}

export default useFetchPost;
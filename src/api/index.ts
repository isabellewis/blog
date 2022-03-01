export const fetchBlogPosts = async () => {
  const response = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return response;
};

export const fetchBlogComments = async (id: number) => {
  const response = await (
    await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  ).json();
  return response;
};

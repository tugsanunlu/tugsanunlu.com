const getBlogPosts = () => {
  return fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tugsanunlu',
  ).then((resp) => resp.json());
};

export { getBlogPosts };

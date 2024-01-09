const PostPage = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  //   console.log(posts);

  return (
    <div>
      <h1>Total Page: {posts.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <p>Likes: {post.likesCount}</p>
              <div className="card-actions">
                <button className="btn">SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;

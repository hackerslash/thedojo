const BlogList = ({ blogs, title, handleDelete }) => {
  // const blogs = props.blogs;
  // const title = props.title;

  // console.log(props, blogs);

  return (
    <div className="blog-list">
      <br />
      <h3>{title}</h3>
      {blogs.map((blogpost) => (
        <div className="blogpost-preview" key={blogpost.id}>
          <h2>{blogpost.title}</h2>
          <p>Written by {blogpost.author}</p>
          <button onClick={() => handleDelete(blogpost.id)}>Delete post</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

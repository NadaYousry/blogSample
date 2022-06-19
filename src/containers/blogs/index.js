import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setBlogs(res));
  }, []);
  return (
    <div className="App">
      <Helmet>
        <title>{"all blogs"}</title>
        <meta name="description" content={"all blogs"} />
      </Helmet>{" "}
      {blogs?.map((blog) => {
        return (
          <div key={blog?.id} className="blog-container">
            <Link to={`/blogs/${blog?.id}`}>
              <h2>{blog?.title}</h2>
              <p>{blog?.body}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;

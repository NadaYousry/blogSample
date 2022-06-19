import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

function Blog() {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((res) => setBlog(res));
    }
  }, [id]);
  return (
    <div className="App">
      <Helmet>
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.body} />
      </Helmet>{" "}
      <div className="blog-container">
        <h1>{blog?.title}</h1>
        <p>{blog?.body}</p>
      </div>
    </div>
  );
}

export default Blog;

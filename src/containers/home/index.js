import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="App">
     <Link to={'/blogs'}>Blogs</Link>
    </div>
  );
}

export default Home;

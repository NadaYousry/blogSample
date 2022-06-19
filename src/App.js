import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Blogs from "./containers/blogs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import * as LazyLoading from "./LazyLoading.js";
import { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./history";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Suspense fallback={"loading..."}>
          <Router history={history}>
            <Switch>
              {/* <Routes>  */}
              <LazyLoading.Blogs path="/blogs"  exact/>
              {/* <LazyLoading.Blog path="/blogs/:id"  exact/> */}
              {/* </Routes> */}
            </Switch>
          </Router>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

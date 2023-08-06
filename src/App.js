import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Career from "./pages/Career";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<AboutMe />} path="/" />
          <Route element={<Career />} path="/career" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

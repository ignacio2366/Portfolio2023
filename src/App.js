import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import AboutMe from "./pages/AboutMe";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<AboutMe />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

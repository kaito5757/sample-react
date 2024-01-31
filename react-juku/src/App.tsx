import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Q1 } from "./components/Q1";
import { Test } from "./components/test";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Q1" element={<Q1 />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/" element={<対象コンポーネント名 />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

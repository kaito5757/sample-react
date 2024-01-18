import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  } from "react-router-dom";
import { UseStateSample } from './components/react-hooks/useStateSample';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseStateSample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

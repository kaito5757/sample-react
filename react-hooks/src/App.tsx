import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import { Home } from './Home';
import { UseReducerSample } from './components/react-hooks/useReducerSample';
import { UseStateSample } from './components/react-hooks/useStateSample';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseStateSample />} />
          <Route path="/useReducer" element={<UseReducerSample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  } from "react-router-dom";
import { UseStateComponent } from './hooks/useStateComponent';
import { Home } from './Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseStateComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

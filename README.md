# sample-react

# React プロジェクトの初期構築

1. React プロジェクト(ts)のインストール

```
yarn create react-app my-app --template typescript
```

2. react-router-dom モジュールの追加

```
yarn add react-router-dom
```

3. Home コンポーネントの追加

```
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>タイトル</h1>
      <ul>
        <li>
          <Link to="/">Link名</Link>
        </li>
        {/* <li><Link to="/"></Link></li> */}
      </ul>
    </div>
  );
};
```

4. App.tsx の変更

```
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<対象コンポーネント名 />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

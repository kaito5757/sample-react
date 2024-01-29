import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>React Juku</h1>
      <ul>
        <li>
          <Link to="/Q1">Q1</Link>
        </li>
        {/* <li><Link to="/"></Link></li> */}
      </ul>
    </div>
  );
};

import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
      <div>
        <h1>React Hooks Sample</h1>
        <ul>
          <li><Link to="/useState">useState Sample</Link></li>
          {/* <li><Link to="/"></Link></li> */}
        </ul>
      </div>
    </>
  )
}
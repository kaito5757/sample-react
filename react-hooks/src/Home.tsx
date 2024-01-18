import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <Link to="/useState">useState</Link>
    </div>
  )
}
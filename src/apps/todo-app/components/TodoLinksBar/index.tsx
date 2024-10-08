import { Link } from "react-router-dom"
import "./styles/styles.scss"
const TodoLinksBar = () => {
  return (
    <div className="TodoLinksBar">
      <nav className="TodoLinksBar_links">
        <Link to={""}>Todo App</Link>
        <Link to={"/todo-app/statistics"}>Statistics</Link>
      </nav>
    </div>
  )
}

export default TodoLinksBar
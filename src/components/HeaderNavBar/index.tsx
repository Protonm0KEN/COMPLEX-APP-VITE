import { Link } from "react-router-dom"
import GithubFinderApp from "../../apps/github-finder-app"
import PortfolioApp from "../../apps/portfolio-app"
import TodoApp from "../../apps/todo-app"
import WeatherApp from "../../apps/weather-app"
import "./ui/styles.scss"
const HeaderNavBar = () => {
    const navLinks = [
        {
            path: "/todo-app/",
            element: <TodoApp />,
            linkTitle: "Todo App"
        },
        {
            path: "/weather-app/",
            element: <WeatherApp />,
            linkTitle: "Weather App"
        },
        {
            path: "/portfolio-app/",
            element: <PortfolioApp />,
            linkTitle: "Portfolio App"
        },
        {
            path: "/github-finder-app/",
            element: <GithubFinderApp />,
            linkTitle: "GithubFinder App"
        },
    ]
    return (
        <div className="HeaderNavBar">
            <nav className="HeaderNavBar_nav">
                <ul className="nav_links">
                    {navLinks.map((navLink) => {
                        return (
                            <Link key={navLink.linkTitle} to={navLink.path}>{navLink.linkTitle}</Link>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
export default HeaderNavBar
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootPage from './rootPage'
import TodoApp from './apps/todo-app'
import HeaderNavBar from './components/HeaderNavBar'
import "./ui/main.scss"
import WeatherApp from './apps/weather-app'
import GithubFinderApp from './apps/github-finder-app'
import PortfolioApp from './apps/portfolio-app'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HeaderNavBar />
        <Routes>
          <Route path='/' element=<RootPage /> />
          <Route path='/todo-app/' element=<TodoApp /> />
          <Route path='/weather-app/' element=<WeatherApp /> />
          <Route path='/github-finder-app/' element=<GithubFinderApp /> />
          <Route path='/portfolio-app/' element=<PortfolioApp /> />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

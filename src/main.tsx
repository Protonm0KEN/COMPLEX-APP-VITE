import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootPage from './rootPage'
import TodoApp from './apps/todo-app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element=<RootPage /> />
          <Route path='/todo-app/' element=<TodoApp /> />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

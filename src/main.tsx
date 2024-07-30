import React from 'react'
import ReactDOM from 'react-dom/client'
import RootPage from './rootPage'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RootPage />
    </Provider>
  </React.StrictMode>,
)

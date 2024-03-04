import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import userStore from './store/user-list-store.jsx'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={userStore}>
      <App />
    </Provider>

  </React.StrictMode>,
)

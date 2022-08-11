import React from 'react'
import ReactDOM from 'react-dom/client'
import enUS from 'antd/lib/locale/en_US'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './index.css'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ConfigProvider locale={enUS}>
    <Router>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </Router>
  </ConfigProvider>
)

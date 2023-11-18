import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './pages/routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import ContextProvider from './pages/provider/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
          <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
  </React.StrictMode>,
)

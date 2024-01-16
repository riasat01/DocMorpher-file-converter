import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './provider/auth-provider/AuthProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './routes/main-route/MainRoute.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute} />
    </AuthProvider>
  </React.StrictMode>,
)

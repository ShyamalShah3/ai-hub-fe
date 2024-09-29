import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/HomePage.jsx'
import DashboardPage from './pages/dashboard/DashboardPage.jsx'
import ChatPage from './pages/chat/ChatPage.jsx'
import RootComponent from './components/root/RootComponent.jsx'
import DashboardComponent from './components/dashboard/DashboardComponent.jsx'
import SignInPage from './pages/signin/SignInPage.jsx'
import SignUpPage from './pages/signup/signUpPage.jsx'

const router = createBrowserRouter([
  {
    element: <RootComponent />,
    children: [
      {
        path: "/", 
        element:<HomePage />
      },
      {
        path: "/sign-in/*", 
        element:<SignInPage />
      },
      {
        path: "/sign-up/*", 
        element:<SignUpPage />
      },
      {
        element: <DashboardComponent />,
        children: [
          {
            path:"/dashboard",
            element:<DashboardPage />
          },
          {
            path:"/dashboard/chats/:id",
            element:<ChatPage />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

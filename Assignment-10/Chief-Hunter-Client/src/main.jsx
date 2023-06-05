import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Hom/Home.jsx';
import Chef_details from './components/chefDetails/Chef_details.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './components/login/Login/Login.jsx';
import Register from './components/login/Register/Register.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Error from './components/Error/Error.jsx';
import BlogPage from './components/blogPage/BlogPage.jsx';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'chef/:id',
            element: <PrivateRoute><Chef_details></Chef_details></PrivateRoute>,
            loader: ({params}) => fetch(`https://chef-recipe-hunter-server-amirhamza24.vercel.app/chef/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blogPage',
            element: <BlogPage></BlogPage>
        },
        {
            path: '*',
            element: <Error></Error>
        }
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)

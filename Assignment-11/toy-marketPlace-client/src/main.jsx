import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from './Main/Main';
import Home from './pages/Layout/hom/Home';
import Blog from './components/Blog/Blog';
import AllToy from './pages/AllToy/AllToy';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './provider/AuthProvider';
import MyToys from './pages/My Toys/MyToys';
import AddToy from './pages/My Toys/AddToy/AddToy';
import ToyDetails from './components/ToyDetails/ToyDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ToysTable from './pages/AllToy/ToysTable';
import UpdateToys from './pages/My Toys/UpdateToys';
import Error from './components/Error/Error';


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
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/allToy',
            element: <AllToy></AllToy>
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
            path: '/myToys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: '/addToy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path: '/toyDetails/:id',
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-market-server-flax.vercel.app/allToys/${params.id}`)
        },
        {
            path: '/toysTable',
            element: <PrivateRoute><ToysTable></ToysTable></PrivateRoute>
        },
        {
            path: '/updateToys/:id',
            element: <PrivateRoute><UpdateToys></UpdateToys></PrivateRoute>,
            loader: ({ params }) => fetch(`https://toy-market-server-flax.vercel.app/allAddToy/${params.id}`)
        },
      ]
    },
    
    {
        path: '*',
        element: <Error></Error>
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

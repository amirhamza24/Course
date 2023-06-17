import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    RouterProvider,
  } from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

  // Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)

/* poppins, oswald font */
// @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap');

/* 
font-family: 'Oswald', sans-serif;
font-family: 'Poppins', sans-serif;
*/

// .title-font {
//     font-family: 'Oswald', sans-serif;
// }

// .title-info {
//     font-family: 'Poppins', sans-serif;
// }

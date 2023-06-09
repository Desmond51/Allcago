import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage.tsx'
import ProductPage from './pages/ProductPage.tsx'


const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" element={<App />}>
      <Route index={true} element={ <Homepage />}></Route>
      <Route path='product/:slug' element ={<ProductPage />}></Route>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

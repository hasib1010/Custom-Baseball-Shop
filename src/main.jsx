import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import Glove3D from './Components/3D/Glove3D.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/custom-gloves",
        element: <Glove3D></Glove3D>
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

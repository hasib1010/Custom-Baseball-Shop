import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx'; 
import LoginForm from './Components/LoginSignUp/Login.jsx';
import SignUp from './Components/LandigPage/SignUp/SignUp.jsx';
import SignUpForm from './Components/LoginSignUp/SignUp.jsx';
import CustomBuilder from './Components/Pages/CustomBuilder/CustomBuilder.jsx';
import Baseball from './Components/Pages/Baseball/Baseball.jsx';
import InField from './Components/Pages/Baseball/Infield/InField.jsx';
import Front from './Components/ProductsModel/BaseballGlove/Front.jsx';
import CustomBaseball from './Components/Pages/CustomBaseball/CustomBaseball.jsx';

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
        element: <CustomBaseball/>
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>
      },
      {
        path: "/register",
        element: <SignUpForm/>
      },
      {
        path: "/builder",
        element: <CustomBuilder/>
      },
      {
        path: "/builder/baseball",
        element: <Baseball/>
      },
      {
        path: "/builder/baseball/infield",
        element: <InField/>
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

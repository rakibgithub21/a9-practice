import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';
import FirebaseAuthProvider from './ContextApi/FirebaseAuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router}></RouterProvider>
   </FirebaseAuthProvider>
  </React.StrictMode>,
)

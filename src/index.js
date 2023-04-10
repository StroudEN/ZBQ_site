import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from "./components/ErrorPage";



const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        // errorElement:<ErrorPage />,
            children:[{}]
    }
])

ReactDOM.render( <RouterProvider router={router} />, document.getElementById('app'))
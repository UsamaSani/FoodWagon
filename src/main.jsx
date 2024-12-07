import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './assets/Pages/About.jsx'
import MyPortFolio from './assets/Pages/MyPortFolio.jsx'
import Blog from './assets/Pages/Blog.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './Home.jsx'
const router= createBrowserRouter(
    [
        {
            Path:"/",
            element:<App/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:"about",
                    element:<About/>
                },
                {
                    path:"MyPortFolio",
                    element:<MyPortFolio/>
                },
                {
                    path:"Blog",
                    element:<Blog/>
                },
            ]
        }
    ]
)
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

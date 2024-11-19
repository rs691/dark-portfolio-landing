import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Project1 from './pages/Project1.jsx';


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
     
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
        children: [
          {
            path: 'project1',
            element: <Project1 />,
          },
          
        ],
      },
      {
        path: '*',
        element: <h1>Not Found</h1>,
      },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)

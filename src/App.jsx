

import Dairy from './Components/Dairy/Dairy'
import Fruits from './Components/Fruits/Fruits'
import Home from './Components/Home/Home'
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SeaFood from './Components/SeaFood/SeaFood'
import AllProducts from './Components/AllProducts/AllProducts'
import Layout from './Components/Layout/Layout'

const App = () => {

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
    path:'/',
    element: <Home/>
  },
   {
    path:'/fruits',
    element:<Fruits/>
  },
 {
    path:'/Dairy',
    element:<Dairy/>
  },
  {
    path:'/SeaFood',
    element:<SeaFood/>
  },
   {
    path:'/AllProducts',
    element:<AllProducts/>
  },

    ]
  }, 
  
  
 

])




  return <RouterProvider router={router}/>
}
// return(
//   <div>
//     <Home/>
//   </div>
// )
// }

export default App

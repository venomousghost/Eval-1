import Mainpage from "./components/mainpage/mainpage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Contact from "./components/Contact/Contact"
import Library from "./components/Library/Library"
// import ProfilePage from "./components/ProfilePage/ProfilePage";
//import Tournament from "./components/tournament/Tournament";
import Organise from "./components/Organise/Organise";
function App(){
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Mainpage/>
    },
    {
      path: '/Login',
      element:<Login/>
    },
    {
      path: '/Cart',
      element:<Cart/>
    },
    {
      path: '/Contact',
      element:<Contact/>
    },
    {
      path: '/Library',
      element:<Library/>
    },
    //  {
    //    path: '/Profile',
    //    element:<ProfilePage/>
    //  },
    // {
    //   path: '/Tournament',
    //   element:<Tournament/>
    // },
     {
       path: '/Organise',
       element:<Organise/>
     },
  ]);
  return(
    <RouterProvider router={router}/>
  );
}
export default App
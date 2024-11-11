import Mainpage from "./components/mainpage/mainpage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Contact from "./components/Contact/Contact"
import Library from "./components/Library/Library"
// import ProfilePage from "./components/ProfilePage/ProfilePage";
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
    // {
    //   path: '/Profile',
    //   element:<ProfilePage/>
    // },
  ]);
  return(
    <RouterProvider router={router}/>
  );
}
export default App
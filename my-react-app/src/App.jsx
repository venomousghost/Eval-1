import Mainpage from "./components/mainpage/mainpage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./components/login/Login";
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
  ]);
  return(
    <RouterProvider router={router}/>
  );
}
export default App
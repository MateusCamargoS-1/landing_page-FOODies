import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cardapio from "../pages/Cardapio/Cardapio";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
     {
        path: '/cardapio',
        element: <Cardapio/>
     }
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />
}

export default AppRoutes;
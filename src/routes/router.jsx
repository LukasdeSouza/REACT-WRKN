import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { RecuperarSenha } from "../pages/auth/RecuperarSenha";
import RootLayout from "./root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path:'/login',
                element: <Login/>
            },
            {
                path: '/recuperar-senha',
                element: <RecuperarSenha/>
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom"
import App from "../pages/App"
import Root from "../pages/Root"
import SinglePage from "../pages/SinglePage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <App />,
                index: true
            },
            {
                path: '/product/:id',
                element: <SinglePage />
            }
        ]
    }
]) 

export default router
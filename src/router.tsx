import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./screens/Home";
import Results from "./screens/Results";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/search-result",
        element: <Results />,
    },
    // todo: use query string
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
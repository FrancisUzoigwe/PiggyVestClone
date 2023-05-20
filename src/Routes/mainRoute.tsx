import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layouts/Layout";
import LandingPage from "../Pages/LandingPage";
import Resources from "../Pages/Resources";
import Save from "../Pages/Save";
import Invest from "../Pages/Invest";
import Stories from "../Pages/Stories";
import FAQs from "../Pages/FAQs";

export const mainRoute = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <LandingPage/>,
                path : "/landing",
            },
            {
                index : true,
                element : <Save/>,
                path : "/save",
            },
            {
                index : true,
                element : <Invest/>,
                path : "/invest",
            },
            {
                index : true,
                element : <Stories/>,
                path : "/stories",
            },
            {
                index : true,
                element : <Stories/>,
                path : "/stories",
            },
            {
                index : true,
                element : <FAQs/>,
                path : "/faqs",
            },
            {
                index : true,
                element : <Resources/>,
                path : "/resources",
            },
        ]
    }
])
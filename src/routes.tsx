import { createBrowserRouter} from "react-router-dom";
import { ContactsPage } from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFound";
import { RootLayout } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { ContactDetailPage } from "./pages/ContactDetail";


export const appRouter = createBrowserRouter([
    {
        path: "/React-JS-Course/",
        element: <RootLayout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                path: '/React-JS-Course/',
                element: <HomePage />
            },

            {
                path: '/React-JS-Course/contacts',
                element: <ContactsPage />
            },
            
            {
                path: '/React-JS-Course/contacts/:contactId',
                element: <ContactDetailPage />
            },
        ]
    },

])


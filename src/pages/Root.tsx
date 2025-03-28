import { Outlet } from "react-router-dom";
import { Header } from "../components/Header"

export const RootLayout = () => {
    return (
        <>
            <Header/>
            <main className="p-8">
                <Outlet/>                
            </main>
        </>
    );

}
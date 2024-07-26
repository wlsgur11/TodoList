import { Outlet } from "react-router"
import Header from "./Header"

const Layout = () => {
    return (
        <div className="container">
            <Header />
            <div style={{ marginTop: '90px' }}></div>
            <Outlet />
        </div>
    )
}

export default Layout
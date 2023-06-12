import Footer from "./Footer/Footer";
import NavMenu from "./NavMenu/Navmenu";

export default function AppLayout({children}) {
    return(
        <>
            <NavMenu/>
            {children}
            <Footer/>
        </>
    )
}

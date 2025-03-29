import './MainLayout.styles.scss'
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return(
        <>
            <Header />
            <main id="main">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayout;

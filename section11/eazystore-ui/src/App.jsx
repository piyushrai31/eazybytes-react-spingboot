import Header from "./components/Header"
import Footer from "./components/footer/Footer"
import Home from "./components/Home"
import { Outlet } from "react-router-dom"
import { useNavigation } from "react-router-dom"


function App() {
    const navigatation = useNavigation();
    return (
        <>
            <Header />
            {navigatation.state == "loading" ? (
                <div className="flex items-center justify-center min-h-[852px]">
                    <span className="text-4xl font-semibold text-primary dark:text-light">
                        Loading...
                    </span>
                </div>
            )
                : (
                    <Outlet />
                )}
            <Footer />
        </>
    )

}

export default App

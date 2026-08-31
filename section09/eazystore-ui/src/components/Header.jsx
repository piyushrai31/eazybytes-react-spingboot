import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTags, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const Header = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme");
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);


    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    }


    const navLinkClass =
        "text-center text-lg font-primary font-semibold text-primary py-2 dark:text-light";
    return (
        <header className="border-b border-gray-300 dark:border-light  sticky top-0 z-20 bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-4">
                <a href="/" className={navLinkClass}>
                    <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
                    <span className="font-bold">Eazy Stickers</span>
                </a>
                <nav className="flex items-center py-2 z-10">

                    <button
                        className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                    >
                        <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon}
                            className="w-4 h-4 dark:text-light text-primary"
                        />
                    </button>

                    <ul className="flex space-x-6">
                        <li>
                            <a href="/" className={navLinkClass}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className={navLinkClass}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className={navLinkClass}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/login" className={navLinkClass}>
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="/cart" className="text-primary py-2 dark:text-light">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    );
};

export default Header;
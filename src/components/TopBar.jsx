import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = ({ isExpandable = true, reserveClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isExpandable) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setIsScrolled(true);
        }
    }, []);

    return (
        <nav className={`top-0 w-full ${isExpandable ? isScrolled ? "bg-rose fixed" : "bg-transparent absolute text-white" : "bg-rose cursor-pointer"} z-40 py-3 px-3 md:p-5 transition-all ease-in-out duration-500`}>
            <div className="grid grid-cols-4 lg:grid-cols-3">
                <div className={`flex-row justify-start ${isScrolled ? "items-center text-base md:text-xl flex" : "items-start text-base md:text-xl lg:text-2xl hidden md:flex"} transition-all ease-in-out duration-500`}>
                    <button onClick={reserveClick}>Reserve</button>
                </div>

                <h1 className={`text-center text-beige font-bold font-great-vibes ${isScrolled ? "text-3xl col-span-2 lg:col-span-1" : "text-4xl md:text-6xl lg:text-logo col-span-4 md:col-span-2 lg:col-span-1"} ${location.pathname === '/' ? "cursor-default" : "cursor-pointer"} transition-all ease-in-out duration-500`} onClick={() => navigate("/")}>Lumière Bistro</h1>

                <div className={`flex-row justify-end ${isScrolled ? "items-center text-base md:text-xl flex" : "items-start text-base md:text-xl lg:text-2xl hidden md:flex"} transition-all ease-in-out duration-500`}>
                    <button onClick={() => navigate("/menu")}>Menu</button>
                </div>
            </div>
        </nav>
    );
}

export default TopBar;
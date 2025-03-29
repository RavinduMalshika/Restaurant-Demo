import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopBar = ({ isExpandable = true }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

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
        <nav className={`top-0 w-full ${isExpandable ? isScrolled ? "bg-rose fixed" : "bg-transparent absolute text-white" : "bg-rose cursor-pointer"} z-50 p-4 transition-all ease-in-out duration-500`}>
            <div className="grid grid-cols-3">
                <div className="flex flex-row justify-start">
                    <p>INSTAGRAM</p>
                </div>

                <h1 className={`text-center text-beige font-bold font-great-vibes ${isScrolled ? "text-3xl" : "text-logo"} transition-all ease-in-out duration-500`} onClick={() => navigate("/")}>Lumière Bistro</h1>

                <div className="flex flex-row justify-end">
                    <p>Menu</p>
                </div>
            </div>
        </nav>
    );
}

export default TopBar;
import { BsFacebook, BsInstagram, BsYelp } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="w-full bg-black text-beige p-5 grid grid-cols-2 md:grid-cols-3 gap-y-5">
            <div className="md:hidden col-span-2 flex flex-col text-center justify-center gap-y-2">
                <div className="flex fex-row justify-center gap-x-5 mb-2">
                    <a href="https://www.instagram.com" target="_blank"><BsInstagram className="size-6" /></a>
                    <a href="https://www.facebook.com" target="_blank"><BsFacebook className="size-6" /></a>
                    <a href="https://www.yelp.com" target="_blank"><BsYelp className="size-6" /></a>
                </div>
                <p className={`font-great-vibes text-4xl ${location.pathname === '/' ? 'cursor-default' : 'cursor-pointer'}`} onClick={() => navigate('/')}>Lumiere Bistro</p>
                <a href="https://www.ravindumalshika.com" target="_blank" className="text-sm">Created by Ravindu Malshika</a>
            </div>

            <div className="flex flex-col justify-center text-start gap-y-2">
                <h1 className="text-lg">Sitemap</h1>
                <p className="cursor-pointer">Reserve Now</p>
                <p className="cursor-pointer" onClick={() => navigate('/menu')}>Menu</p>
                <p className="cursor-pointer" onClick={() => navigate('/about-us')}>About Us</p>
                <p className="cursor-pointer">Contact Us</p>
            </div>

            <div className="hidden md:flex flex-col text-center justify-center gap-y-2">
                <div className="flex fex-row justify-center gap-x-5 mb-2">
                    <a href="https://www.instagram.com" target="_blank"><BsInstagram className="size-6 hover:text-rose" /></a>
                    <a href="https://www.facebook.com" target="_blank"><BsFacebook className="size-6 hover:text-rose" /></a>
                    <a href="https://www.yelp.com" target="_blank"><BsYelp className="size-6 hover:text-rose" /></a>
                </div>
                <p className={`font-great-vibes text-4xl ${location.pathname === '/' ? 'cursor-default' : 'cursor-pointer'}`} onClick={() => navigate('/')}>Lumiere Bistro</p>
                <a href="https://www.ravindumalshika.com" target="_blank" className="text-sm hover:text-rose">Created by Ravindu Malshika</a>
            </div>

            <div className="flex flex-col justify-center text-end gap-y-2">
                <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                <a href="mailto:lumierebistro@email.com">lumierebistro@email.com</a>

                <a href="https://maps.app.goo.gl/CxfUt1Lyv7VJSXtV6" target="_blank">
                    42 Rue de la Paix
                    <br />
                    75002 Paris, France
                </a>
            </div>
        </div>
    );
};

export default Footer;
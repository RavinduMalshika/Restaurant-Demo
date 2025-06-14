import { useEffect, useRef, useState } from "react";
import TopBar from "../components/TopBar";
import starterImage1 from "../assets/images/starter-1.jpg";
import starterImage2 from "../assets/images/starter-2.jpg";
import starterImage3 from "../assets/images/starter-3.jpg";
import saladImage1 from "../assets/images/salads-1.jpg";
import saladImage2 from "../assets/images/salads-2.jpg";
import mainsImage1 from "../assets/images/mains-1.jpg";
import mainsImage2 from "../assets/images/mains-2.jpg";
import mainsImage3 from "../assets/images/mains-3.jpeg";
import specialsImage1 from "../assets/images/specials-1.jpg";
import specialsImage2 from "../assets/images/specials-2.jpg";
import specialsImage3 from "../assets/images/specials-3.jpeg";
import specialsImage4 from "../assets/images/specials-4.jpg";
import drinksImage1 from "../assets/images/drinks-1.jpg";
import drinksImage2 from "../assets/images/drinks-2.jpg";
import drinksImage3 from "../assets/images/drinks-3.jpg";
import drinksImage4 from "../assets/images/drinks-4.jpg";
import drinksImage5 from "../assets/images/drinks-5.jpg";
import drinksImage6 from "../assets/images/drinks-6.jpg";
import drinksImage7 from "../assets/images/drinks-7.jpg";
import drinksImage8 from "../assets/images/drinks-8.jpg";
import dessertImage1 from "../assets/images/desserts-1.jpg";
import dessertImage2 from "../assets/images/desserts-2.jpg";
import dessertImage3 from "../assets/images/desserts-3.jpg";
import ReserveDialog from "../components/ReserveDialog";

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [menuItems, setMenuItems] = useState([]);
    const [subCategories, setSubCategoires] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const topBarRef = useRef(null);
    const [topBarHeight, setTopBarHeight] = useState(0);
    const [showReserveDialog, setShowReserveDialog] = useState(false);

    const menuCategories = [
        "Starters",
        "Salads",
        "Main Course",
        "Specials",
        "Drinks",
        "Desserts"
    ];

    const starters = [
        {
            name: "Bruschetta Classique",
            description: "Toasted baguette with fresh tomatoes, basil, and balsamic glaze.",
            image: starterImage1,
        },
        {
            name: "French Onion Soup",
            description: "Slow-cooked onions in a rich broth, topped with melted Gruyère cheese.",
            image: starterImage2,
        },
        {
            name: "Truffle Fries",
            description: "Crispy fries tossed with truffle oil, parmesan, and fresh herbs.",
            image: starterImage3,
        }
    ];

    const salads = [
        {
            name: "Lumière Greens",
            description: "Mixed greens, goat cheese, candied walnuts, and honey mustard dressing.",
            image: saladImage1,
        },
        {
            name: "Mediterranean Delight",
            description: "Cucumber, cherry tomatoes, olives, and feta with lemon vinaigrette.",
            image: saladImage2,
        }
    ];

    const mainCourse = [
        {
            name: "Coq au Vin",
            description: "Classic French dish of braised chicken in red wine with mushrooms and pearl onions.",
            image: mainsImage1,
        },
        {
            name: "Pasta Primavera",
            description: "Fresh seasonal vegetables sautéed with garlic and olive oil over linguine.",
            image: mainsImage2,
        },
        {
            name: "Grilled Portobello Steak",
            description: "Marinated Portobello mushroom served with roasted potatoes and chimichurri sauce.",
            image: mainsImage3,
        }
    ];

    const seasonalSpecials = [
        {
            name: "Butternut Squash Risotto",
            description: "Creamy Arborio rice with roasted butternut squash, sage, and parmesan.",
            image: specialsImage1,
        },
        {
            name: "Pan-Seared Sea Bass",
            description: "Served with lemon butter sauce and a side of roasted asparagus.",
            image: specialsImage2,
        },
        {
            name: "Truffle & Wild Mushroom Tagliatelle",
            description: "Fresh pasta tossed with black truffle cream sauce and wild mushrooms.",
            image: specialsImage3,
        },
        {
            name: "Pumpkin Spice Martini",
            description: "A cozy blend of vodka, pumpkin spice, and cream liqueur.",
            image: specialsImage4,
        }
    ];

    const drinks = {
        subCategories: [
            {
                key: "nonAlcoholic",
                name: "Non-Alcoholic",
            },
            {
                key: "alcoholic",
                name: "Alcoholic",
            }
        ],
        nonAlcoholic: [
            {
                name: "Lavender Lemonade",
                description: "Fresh lemonade infused with lavender for a refreshing twist.",
                image: drinksImage1,
            },
            {
                name: "Freshly Brewed Iced Tea",
                description: "Classic black tea with a hint of citrus.",
                image: drinksImage2,
            },
            {
                name: "Espresso",
                description: "A bold and rich Italian-style espresso shot.",
                image: drinksImage3,
            },
            {
                name: "Cappuccino",
                description: "Smooth espresso with steamed milk and velvety foam.",
                image: drinksImage4,
            }
        ],
        alcoholic: [
            {
                name: "French 75",
                description: "A refreshing mix of gin, champagne, lemon juice, and sugar.",
                image: drinksImage5,
            },
            {
                name: "Mimosa Royale",
                description: "A bubbly combination of fresh orange juice and sparkling wine.",
                image: drinksImage6,
            },
            {
                name: "House Red/White Wine",
                description: "A selection of carefully curated wines.",
                image: drinksImage7,
            },
            {
                name: "Classic Sangria",
                description: "A fruity and refreshing red wine cocktail with citrus and berries.",
                image: drinksImage8,
            }
        ]
    };

    const desserts = [
        {
            name: "Crème Brûlée",
            description: "Silky vanilla custard with a caramelized sugar top.",
            image: dessertImage1,
        },
        {
            name: "Chocolate Fondant",
            description: "Warm chocolate lava cake with vanilla bean ice cream.",
            image: dessertImage2,
        },
        {
            name: "Classic Tarte Tatin",
            description: "French-style caramelized apple tart with a flaky crust.",
            image: dessertImage3,
        }
    ];

    useEffect(() => {
        const updateHeight = () => {
            if (topBarRef.current) {
                setTimeout(() => {
                    setTopBarHeight(topBarRef.current.clientHeight);
                }, 500); // Delay by 500ms
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    useEffect(() => {
        switch (selectedCategory) {
            case 0:
                setMenuItems(starters);
                break;
            case 1:
                setMenuItems(salads);
                break;
            case 2:
                setMenuItems(mainCourse);
                break;
            case 3:
                setMenuItems(seasonalSpecials);
                break;
            case 4:
                setMenuItems(drinks);
                break;
            case 5:
                setMenuItems(desserts);
                break;
            default:
                break;
        }
    }, [selectedCategory])

    useEffect(() => {
        if (!Array.isArray(menuItems)) {
            setSubCategoires(menuItems.subCategories);
            setSelectedItem(menuItems.nonAlcoholic[0]);
        } else {
            setSelectedItem(menuItems[0]);
        }
    }, [menuItems])

    return (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden justify-between">
            <div ref={topBarRef} className="topBar">
                <TopBar isExpandable={false} reserveClick={() => setShowReserveDialog(true)} />

                <ul className="hidden md:flex flex-row font-great-vibes text-2xl text-warm-white gap-x-10 bg-charcoal rounded-b-full justify-center py-5">
                    {menuCategories.map((category, index) => (
                        <li key={index} className={`${selectedCategory === index ? "text-beige glowing-text" : "text-glow"} cursor-pointer`} onClick={() => setSelectedCategory(index)}>{category}</li>
                    ))
                    }
                </ul>
            </div>

            <div className="flex flex-row">
                <ul className="flex md:hidden flex-col font-great-vibes text-2xl text-warm-white gap-y-10 bg-charcoal rounded-r-full justify-center px-3">
                    {menuCategories.map((category, index) => (
                        <li key={index} className={`${selectedCategory === index ? "text-beige glowing-text" : "text-glow"} cursor-pointer`} onClick={() => setSelectedCategory(index)}>{category}</li>
                    ))
                    }
                </ul>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center p-10" style={{ height: `calc(100vh - ${topBarHeight}px)` }}>
                    <div className="z-10 max-h-full h-full box-border scroll-container">
                        {Array.isArray(menuItems) ? (
                            <div className="h-full flex flex-col justify-center scroll-content ps-10">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-y-5 box-border mb-10 bg-white/10 md:bg-transparent rounded-xl">
                                        <div className="flex flex-row gap-x-3 items-center group">
                                            <div className="flex relative w-fit items-center justify-center mb-1">
                                                <div className="bg-black h-4 w-4 rotate-45"></div>
                                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-black h-2 w-2 rounded-full ${selectedItem?.name === item.name ? "bg-rose" : "bg-warm-white group-hover:bg-yellow-400"}`}></div>
                                            </div>
                                            <p className="font-great-vibes text-3xl cursor-pointer" onClick={() => setSelectedItem(item)}>{item.name}</p>
                                        </div>
                                        <p className={`text-charcoal text-lg transition-all duration-500 ease-in-out ${selectedItem?.name === item.name ? "opacity-100" : "opacity-0 hidden pointer-events-none"}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            subCategories.map((subCategory, index) => (
                                <div className="flex flex-col gap-y-10 box-border mb-10 scroll-content ps-10 justify-center" key={index}>
                                    <h3 className="font-great-vibes text-4xl text-center">{subCategory.name}</h3>
                                    {menuItems[subCategory.key].map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex flex-col gap-y-5 box-border justify-center">
                                            <div className="flex flex-row gap-x-3 items-center group">
                                                <div className="flex relative w-fit items-center justify-center mb-1">
                                                    <div className="bg-black h-4 w-4 rotate-45"></div>
                                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-black h-2 w-2 rounded-full ${selectedItem?.name === item.name ? "bg-rose" : "bg-warm-white group-hover:bg-yellow-400"}`}></div>
                                                </div>
                                                <p className="font-great-vibes text-3xl cursor-pointer" onClick={() => setSelectedItem(item)}>{item.name}</p>
                                            </div>
                                            <p className={`text-charcoal text-lg transition-all duration-500 ease-in-out ${selectedItem?.name === item.name ? "opacity-100" : "opacity-0 hidden pointer-events-none"}`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))
                        )}
                    </div>

                    <div className="hidden md:block relative w-full object-cover px-10">
                        <img className="masked-image object-cover transition-all duration-300 ease-in-out" src={selectedItem?.image} alt="Image to Mask" />
                    </div>

                    <img className="md:hidden absolute z-0 masked-image-vertical object-cover transition-all duration-300 ease-in-out" src={selectedItem?.image} alt="Image to Mask" />
                </div>
            </div>

            {showReserveDialog &&
                <ReserveDialog handleClose={() => setShowReserveDialog(false)} />
            }
        </div>
    );
};

export default Menu;
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DynamicTitle(){
    const location = useLocation();

    useEffect(() => {
        const titles: {[key: string]: string } = {
            "/": "Home",
            "/about": "About",
            "/contact": "Contact Us",
        };

        document.title = titles[location.pathname] || "My Website";
    }, [location.pathname]);

    return null;
}
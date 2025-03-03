import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DynamicTitle(){
    const location = useLocation();

    useEffect(() => {
        const titles: {[key: string]: string } = {
            "/": "Welcome! - Pastor John Ximenez, Sr.",
            "/about": "About",
            "/contact": "Contact Us",
            "/mission": "Mission",
            "/gallery":"Gallery",
            

        };

        document.title = titles[location.pathname] || "My Website";
    }, [location.pathname]);

    return null;
}
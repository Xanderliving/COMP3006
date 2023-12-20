import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import WAW from "../Components/Waw";
import WhatsNew from "../Components/Whatsnew";
import Info from "../Components/Info"

export default function Home() {
    return(
        <>
            <Navbar />
            <Hero />
            <WAW />
            <WhatsNew />
        </>
    )
}
import type { Route } from "./+types/home";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Hero } from "../components/Hero";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Brunno Mota" },
        { name: "description", content: "Brunno Mota" },
    ];
}

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Footer />
        </>
    );
}   

import type { Route } from "./+types/home";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Welcome } from "../pages/welcome";

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
            <Welcome />
            <Footer />
        </>
    );
}   

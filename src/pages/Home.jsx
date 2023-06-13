import About from "../layout/About/About";
import AppLayout from "../layout/AppLayout";
import Hero from "../layout/Hero/Hero";

export default function Home() {
    return(
        <AppLayout>
            <Hero/>
            <About/>
        </AppLayout>
    )
}
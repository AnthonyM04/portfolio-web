import AppLayout from "../layout/AppLayout";
import Hero from "../layout/Hero/Hero";
import About from "../layout/About/About";
import ThreeThings from "../layout/3Things/List";
import Portfolio from "../layout/Portfolio/List";
import Skill from "../layout/Skill/List";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <About />
      <ThreeThings />
      <Portfolio />
      <Skill/>
    </AppLayout>
  );
}

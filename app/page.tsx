import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import SocialMedia from "@/components/SocialMedia";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Projects />
        <AboutMe />
        <SocialMedia />
      </main>
      <Footer />
    </>
  );
}

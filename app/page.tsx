import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <SocialMedia />
      </main>
      <Footer />
    </>
  );
}

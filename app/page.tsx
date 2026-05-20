import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NewsletterBanner />
      </main>
      <Footer />
    </>
  );
}

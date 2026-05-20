import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import USPLeiste from "@/components/USPLeiste";
import SortimentVorschau from "@/components/SortimentVorschau";
import AktuelleAngebote from "@/components/AktuelleAngebote";
import UeberUnsTeaser from "@/components/UeberUnsTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <USPLeiste />
        <SortimentVorschau />
        <AktuelleAngebote />
        <UeberUnsTeaser />
      </main>
      <Footer />
    </>
  );
}
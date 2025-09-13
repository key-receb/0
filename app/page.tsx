import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Counter from "./components/Counter";
import KeyPanel from "./components/KeyPanel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <section className="py-20">
        <Counter target={123456} />
      </section>
      <KeyPanel />
      <Footer />
    </main>
  );
}

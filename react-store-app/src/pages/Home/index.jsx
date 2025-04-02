import React from "react";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Promotion from "./components/Promotion";
import Testimonials from "./components/Testimonials";
function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <FeaturedProducts />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Promotion />
        <Testimonials />
      </div>
    </main>
  );
}

export default Home;

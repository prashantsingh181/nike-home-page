import {
  Hero,
  PopularProducts,
  SuperQuality,
  Subscribe,
  Services,
  Footer,
  SpecialOffer,
  CustomerReviews,
} from "./sections";
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";
import React from "react";
import { useState } from "react";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu((prevValue) => !prevValue);
  }
  // if (openMenu) {
  //   document.querySelector("body").classList.add("fixed");
  // } else {
  //   document.querySelector("body").classList.remove("fixed");
  // }

  return (
    <main className="relative">
      {openMenu && <MobileMenu toggleMenu={toggleMenu} />}
      <Nav toggleMenu={toggleMenu} />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;

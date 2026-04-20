"use client";

import { useState } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Progress from "./components/Progress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Craft from "./components/Craft";
import Portfolio from "./components/Portfolio";
import Categories from "./components/Categories";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const TWEAK_DEFAULTS = {
  heroImg: "walnut",
  darkNav: "auto",
  ctaLabel: "Zatražite Ponudu",
};

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [tweaks] = useState(TWEAK_DEFAULTS);

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Cursor />
      <Progress />
      <Nav tweaks={tweaks} />
      <Hero tweaks={tweaks} />
      <Manifesto />
      <Craft />
      <Portfolio />
      <Categories />
      <Process />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

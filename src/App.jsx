import React from "react";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Section from "./components/Section";
import Portfolio from "./layouts/Portfolio";
import Services from "./layouts/Service";
import About from "./layouts/About";
import Contact from "./layouts/Contact";

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-2 mx-auto max-w-screen overflow-x-hidden pt-15">
      <Header />

      <Home />

      <Section
        name={"Portfolio"}
        title={`Precision
              applied at scale`}
        element={<Portfolio />}
      />

      <Section name={"Services"} title={""} element={<Services />} />
      <Section
        name={"About"}
        title={"Bridging Physics & Reality"}
        element={<About />}
      />
      <Section
        name={"Contact"}
        title={"We Will Contact You"}
        element={<Contact />}
      />
      <footer className="w-full text-black/80 text-center text-xs flex flex-col md:flex-row items-center justify-between md:px-10 my-5">
        <p className="mb-2">AUTOMOTIVE | AEROSPACE | ENERGY</p>
        <p className="mb-2">
          Copyright 2026 EPSINITY — Simulation at the precision of physics.
        </p>
        <img
          src="/logo.svg"
          alt="Epsinity"
          style={{ height: 26, width: "auto" }}
        />
        {/* <p>Epsinity</p> */}
      </footer>
    </main>
  );
};

export default App;

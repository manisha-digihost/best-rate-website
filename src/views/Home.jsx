import React from "react";
import {
  DomainName,
  ExpertyBuild,
  Hero,
  ReadyToExplore,
  Mission
} from "../components/HomeComponents";

const Home = () => {
  return (
    <>
      <Hero />
      <DomainName />
      <ExpertyBuild />
      <ReadyToExplore />
      <Mission />
    </>
  );
};

export default Home;

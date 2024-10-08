import React from "react";
import {
  DomainName,
  ExpertyBuild,
  Hero,
  ReadyToExplore,
  StartSuccess,
} from "../components/HomeComponents";

const Home = () => {
  return (
    <>
      <Hero />
      <DomainName />
      <ExpertyBuild />
      <ReadyToExplore />
      <StartSuccess />
    </>
  );
};

export default Home;

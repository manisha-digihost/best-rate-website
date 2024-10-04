import React from "react";
import {
  DomainName,
  ExpertyBuild,
  Hero,
  ReadyToExplore,
} from "../components/HomeComponents";

const Home = () => {
  return (
    <>
      <Hero />
      <DomainName />
      <ExpertyBuild />
      <ReadyToExplore />
    </>
  );
};

export default Home;

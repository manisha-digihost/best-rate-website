import React from "react";
import {
  DomainName,
  ExpertyBuild,
  Hero,
  ReadyToExplore,
  startSuccess,
  vouchForUs,
} from "../components/HomeComponents";

const Home = () => {
  return (
    <>
      <Hero />
      <DomainName />
      <ExpertyBuild />
      <ReadyToExplore />
      <startSuccess />
      <vouchForUs />
      {/* <Mission /> */}
    </>
  );
};

export default Home;

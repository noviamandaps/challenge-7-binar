import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/homepage/Hero";
import SearchCar from "../components/searchCar/SearchCar";

export default function Cars() {
  return (
    <>
      <Layout>
        <Hero />
        <SearchCar/>
      </Layout>
    </>
  );
}

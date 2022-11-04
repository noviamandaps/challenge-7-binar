import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/homepage/Hero";
import Section2 from "../components/homepage/Section2";
import Section3 from "../components/homepage/Section3";
import Section4 from "../components/homepage/Section4";
import Section5 from "../components/homepage/Section5";
import Section6 from "../components/homepage/Section6";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <Section2/>
        <Section3/>
        <Section4/>        
        <Section5/>
        <Section6/>
      </Layout>
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <section className="w-11/12 mx-auto my-3 ">
        <LatestNews />
      </section>
      <nav className="w-11/12 mx-auto my-3 ">
        <Navbar />
      </nav>
      <main></main>
      <section className="left_nav"></section>
      <section className="main">
        <Outlet></Outlet>
      </section>
      <section className="right_nav"></section>
    </div>
  );
};

export default HomeLayout;

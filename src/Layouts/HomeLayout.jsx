import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

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
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5 ">
        <aside className="col-span-3 sticky top-0 h-fit ">
          <LeftAside />
        </aside>

        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>

      <section className="right_nav"></section>
    </div>
  );
};

export default HomeLayout;

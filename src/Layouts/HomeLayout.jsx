import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <Header/>
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
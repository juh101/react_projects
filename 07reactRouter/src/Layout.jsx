import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";
import { Outlet } from 'react-router-dom'

//<Outlet /> — A placeholder where the matched child route will render
export default function Layout() {
    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>)
}
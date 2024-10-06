import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>

        </>
    )
}
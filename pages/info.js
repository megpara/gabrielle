import styles from "../styles/Info.module.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { db } from "./_app";
import { doc, getDoc } from "@firebase/firestore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

const buttonText = {
  LOADING: "Loading",
  IDLE: "Submit",
  SUCCESS: "Complete",
  ERROR: "Uh oh",
};

export default function Info() {
  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh] z-[-1]">
        <img
          className="brightness-75 h-full w-full object-cover"
          src="homepage.jpg"
        />
        <Title>gabrielle johnson yoga</Title>
      </div>
      <Footer />
    </Layout>
  );
}

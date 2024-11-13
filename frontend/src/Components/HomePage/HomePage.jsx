import { useState } from "react";
import styles from "./HomePage.module.css";
import MainMenu from "../../Containers/Menu/MainMenu";
import Header from "../../Containers/Header/Header";
import Footer from "../../Containers/Footer/Footer";
import MediaQuery from "react-responsive";

const HomePage = () => {
  const username = localStorage.getItem("username");

  return (
    <>
      <MediaQuery minWidth={550}>
        <Header />
      </MediaQuery>
      <div className={styles.main_container}>
        <h2>Hi {username}, how do you feel today?</h2>
        <img src="/Logo/Colors-Wheel.png" alt="Color's Wheel" />
      </div>

      <MainMenu />
      <MediaQuery minWidth={550}>
        <Footer />

      </MediaQuery>
    </>
  );
};

export default HomePage;
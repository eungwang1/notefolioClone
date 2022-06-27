import React from "react";
import AppLayout from "../components/common/AppLayout";
import CustomDropdown from "../components/common/CustomDropdown";
import Header from "../components/common/header/Header";
import Nav from "../components/common/header/Nav";
import Category from "../components/main/Category";
import Hotcontent from "../components/main/Hotcontent";
import Notefolio from "../components/main/Notefolio";

const Main = () => {
  return (
    <AppLayout>
      <Header />
      <Nav />
      <Hotcontent />
      <Category />
      <Notefolio />
    </AppLayout>
  );
};

export default Main;

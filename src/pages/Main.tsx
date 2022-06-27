import React from "react";
import AppLayout from "../components/common/AppLayout";
import Nav from "../components/common/header/Nav";
import Hotcontent from "../components/main/Hotcontent";
import Notefolio from "../components/main/Notefolio";

const Main = () => {
  return (
    <AppLayout>
      <Nav />
      <Hotcontent />
      <Notefolio />
    </AppLayout>
  );
};

export default Main;

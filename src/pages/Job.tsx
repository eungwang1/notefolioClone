import React from "react";
import AppLayout from "../components/common/AppLayout";
import Header from "../components/common/header/Header";
import Nav from "../components/common/header/Nav";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Job = () => {
  return (
    <AppLayout>
      <Header />
      <Nav />
      <div style={{ height: "100%" }}>
        <LoadingSpinner />
      </div>
    </AppLayout>
  );
};

export default Job;

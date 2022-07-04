import React from "react";
import AppLayout from "../src/components/common/AppLayout";
import Header from "../src/components/common/header/Header";
import Nav from "../src/components/common/header/Nav";
import LoadingSpinner from "../src/components/common/LoadingSpinner";

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
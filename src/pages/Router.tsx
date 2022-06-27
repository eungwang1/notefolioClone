import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../lib/routes";
import Job from "./Job";
import Main from "./Main";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Main />} />
        <Route path={routes.JOB} element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
};

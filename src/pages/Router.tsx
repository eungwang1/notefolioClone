import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import routes from "../lib/routes";
import { onClearNotefolioList } from "../slices/notefolioSlice";
import { useAppDispatch } from "../store/hook";
import Job from "./Job";
import Main from "./Main";
import Search from "./Search";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Main />} />
        <Route path={routes.JOB} element={<Job />} />
        <Route path={routes.SEARCH} element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

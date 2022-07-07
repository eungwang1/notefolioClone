import { postLike } from "@actions/notefolioAction";
import AppLayout from "@components/common/AppLayout";
import Header from "@components/common/header/Header";
import Nav from "@components/common/header/Nav";
import useNotefolio from "@lib/useNotefolio";
import { RootState } from "@store/configureStore";
import { useAppDispatch } from "@store/hook";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Job = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.notefolioSlice.academyList);

  return (
    <AppLayout>
      <Header />
      <Nav />
      {/* <button onClick={test}>테스트</button> */}
    </AppLayout>
  );
};

export default Job;

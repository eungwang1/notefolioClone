import { postLike } from "@actions/notefolioAction";
import AppLayout from "@components/common/AppLayout";
import Header from "@components/common/header/Header";
import Nav from "@components/common/header/Nav";
import { useAppDispatch } from "@store/hook";
import axios from "axios";
import React from "react";

const Job = () => {
  const dispatch = useAppDispatch();
  const test = async () => {
    dispatch(postLike("1"));
  };
  return (
    <AppLayout>
      <Header />
      <Nav />
      <button onClick={test}>테스트</button>
    </AppLayout>
  );
};

export default Job;

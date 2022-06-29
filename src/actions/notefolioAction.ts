import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotefolioList = createAsyncThunk("get/notefolioList", async (page: number) => {
  try {
    const res = await axios.get(`http://localhost:4000/notefolio?_page=${page}&_limit=30`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

export const getNotefolio = createAsyncThunk("get/notefolio", async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:4000/notefolio/${id}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

export const getRecruitList = createAsyncThunk("get/recruitList", async () => {
  try {
    const res = await axios.get(`http://localhost:4000/recruitList`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

export const getCreatorList = createAsyncThunk("get/creatorList", async () => {
  try {
    const res = await axios.get(`http://localhost:4000/creatorList`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

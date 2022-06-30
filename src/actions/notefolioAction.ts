import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getNotefolioListParams } from "../customTypes/params";

export const getNotefolioList = createAsyncThunk(
  "get/notefolioList",
  async ({ page, search, category }: getNotefolioListParams, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/notefolio?_page=${page}&_limit=30&q=${search || ""}${
          category ? `&category=${category}` : ""
        }`
      );
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
);

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

export const getAcademyList = createAsyncThunk("get/academyList", async () => {
  try {
    const res = await axios.get(`http://localhost:4000/academyList`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

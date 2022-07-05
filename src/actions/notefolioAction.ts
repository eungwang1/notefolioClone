import { INotefolio } from "@customTypes/notefolio";
import { INotefolioSlice } from "./../customTypes/notefolio";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getNotefolioListParams } from "@customTypes/params";

const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://my-cool-project-eungwang.herokuapp.com";
export const getNotefolioList = createAsyncThunk(
  "get/notefolioList",
  async ({ page, search, category, sort }: getNotefolioListParams, thunkAPI) => {
    try {
      const res = await axios.get(
        `${api}/notefolio?_page=${page}&_limit=20&q=${search || ""}${
          category ? `&category=${category}` : ""
        }${
          sort === "likecount"
            ? `&_sort=likecount&_order=desc`
            : sort === "createdAt"
            ? `&_sort=createdAt&_order=desc`
            : ""
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
    const res = await axios.get(`${api}/notefolio/${id}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

export const getRecruitList = createAsyncThunk("get/recruitList", async () => {
  try {
    const res = await axios.get(`${api}/recruitList`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

export const getCreatorList = createAsyncThunk("get/creatorList", async () => {
  try {
    const res = await axios.get(`${api}/creatorList`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

export const getAcademyList = createAsyncThunk("get/academyList", async () => {
  try {
    const res = await axios.get(`${api}/academyList`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

export const postLike = createAsyncThunk("post/like", async (id: string, thunkAPI) => {
  const { me } = (thunkAPI.getState() as { notefolioSlice: INotefolioSlice }).notefolioSlice;
  try {
    const res = await axios.get(`${api}/${id}`);
    const isLiked =
      res.data.likedUserList.filter((el: INotefolio) => el.username === me.username).length >= 1;
    if (isLiked) {
      await axios.patch(`${api}/${id}`, {
        likedUserList: res.data.likedUserList.filter((el: INotefolio) => el.username !== me.username),
      });
      return false;
    } else {
      const likedUserList = [...res.data.likedUserList, { username: me.username }];
      await axios.patch(`${api}/${id}`, {
        likedUserList,
      });
      return true;
    }
  } catch (e) {
    console.error(e);
  }
});

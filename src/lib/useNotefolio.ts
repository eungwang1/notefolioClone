import { ICreator, INotefolio, IRecruit } from "./../customTypes/notefolio";
import { PayloadAction } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { getNotefolioListParams } from "../customTypes/params";
import {
  getAcademyList,
  getCreatorList,
  getNotefolio,
  getNotefolioList,
  getRecruitList,
} from "./../actions/notefolioAction";
import { useAppDispatch } from "./../store/hook";
const useNotefolio = () => {
  const dispatch = useAppDispatch();

  const onLoadNotefolioList = useCallback(
    async ({ page, search, category, sort }: getNotefolioListParams) => {
      return await dispatch(getNotefolioList({ page, search, category, sort }));
    },
    [dispatch]
  );

  const onLoadRecruitList = useCallback(async () => {
    return await dispatch(getRecruitList());
  }, [dispatch]);

  const onLoadCreatorList = useCallback(async () => {
    return await dispatch(getCreatorList());
  }, [dispatch]);

  const onLoadNotefolio = useCallback(
    async (id: string) => {
      return await dispatch(getNotefolio(id));
    },
    [dispatch]
  );

  const onLoadAcademyList = useCallback(async () => {
    await dispatch(getAcademyList());
  }, [dispatch]);

  return {
    onLoadNotefolio,
    onLoadNotefolioList,
    onLoadRecruitList,
    onLoadCreatorList,
    onLoadAcademyList,
  };
};
export default useNotefolio;

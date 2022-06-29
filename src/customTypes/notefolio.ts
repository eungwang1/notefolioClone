import { SerializedError } from "@reduxjs/toolkit";

export interface INotefolio {
  username: string;
  profile: string;
  title: string;
  contentimg: string;
  pdfsrc: string;
  viewcount: number;
  likecount: number;
  id: string;
}

export interface ICreator {
  coverImage: string[];
  profileImage: string;
  username: string;
  category: string;
}

export interface IRecruit {
  image: string;
  title: string;
  name: string;
}

export interface INotefolioSlice {
  pdfModalState: boolean;
  currentNotefolio: INotefolio | null;
  notefolioList: INotefolio[];
  recruitList: IRecruit[];
  creatorList: ICreator[];
  getNotefolioListLoading: boolean;
  getNotefolioListError: SerializedError | null;
  getNotefolioLoading: boolean;
  getNotefolioError: SerializedError | null;
  getRecruitListLoading: boolean;
  getRecruitListError: SerializedError | null;
  getCreatorListLoading: boolean;
  getCreatorListError: SerializedError | null;
}

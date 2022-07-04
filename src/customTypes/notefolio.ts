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
  createdAt: string;
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

export interface IAcademy {
  image: string;
  title: string;
  content: string;
}

export interface ICategory {
  title: string;
  code: string;
}
export interface INotefolioSlice {
  pdfModalState: boolean;
  searchModalState: boolean;
  pdfMobilePage: number;
  currentNotefolio: INotefolio | null;
  notefolioList: INotefolio[];
  searchedNotefolioList: INotefolio[];
  notefolioListAtTop: INotefolio[];
  notefolioListAtBottom: INotefolio[];
  recruitList: IRecruit[];
  creatorList: ICreator[];
  academyList: IAcademy[];
  categories: ICategory[];
  selectedCategory: string;
  getNotefolioListLoading: boolean;
  getNotefolioListError: SerializedError | null;
  getNotefolioLoading: boolean;
  getNotefolioError: SerializedError | null;
  getRecruitListLoading: boolean;
  getRecruitListError: SerializedError | null;
  getCreatorListLoading: boolean;
  getCreatorListError: SerializedError | null;
  getAcademyListLoading: boolean;
  getAcademyListError: SerializedError | null;
}

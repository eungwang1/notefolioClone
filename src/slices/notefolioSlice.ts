import {
  getAcademyList,
  getCreatorList,
  getNotefolio,
  getNotefolioList,
  getRecruitList,
} from "./../actions/notefolioAction";
import { IAcademy, ICreator, INotefolio, INotefolioSlice, IRecruit } from "./../customTypes/notefolio";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: INotefolioSlice = {
  notefolioList: [],
  notefolioListAtTop: [],
  notefolioListAtBottom: [],
  searchedNotefolioList: [],
  recruitList: [],
  creatorList: [],
  academyList: [],
  categories: [
    { title: "전체분야", code: "" },
    { title: "그래픽 디자인", code: "a1" },
    { title: "브랜딩/편집", code: "a2" },
    { title: "UI/UX", code: "a3" },
    { title: "일러스트레이션", code: "a4" },
    { title: "캐릭터 디자인", code: "a5" },
    { title: "디지털 아트", code: "a6" },
    { title: "타이포그래피", code: "a7" },
    { title: "포토그래피", code: "a8" },
  ],
  selectedCategory: "",
  currentNotefolio: null,
  pdfModalState: false,
  pdfMobilePage: 1,
  searchModalState: false,
  getNotefolioListLoading: false,
  getNotefolioListError: null,
  getNotefolioLoading: false,
  getNotefolioError: null,
  getRecruitListLoading: false,
  getRecruitListError: null,
  getCreatorListLoading: false,
  getCreatorListError: null,
  getAcademyListLoading: false,
  getAcademyListError: null,
};

export const notefolioSlice = createSlice({
  name: "notefolio",
  initialState,
  reducers: {
    onTogglePdfModalState: (state: INotefolioSlice, action: PayloadAction<boolean>) => {
      state.pdfModalState = action.payload;
      if (action.payload) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflowY = "unset";
        state.currentNotefolio = null;
      }
    },
    onToggleSearchModalState: (state: INotefolioSlice, action: PayloadAction<boolean>) => {
      state.searchModalState = action.payload;
      if (action.payload) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflowY = "unset";
      }
    },
    onClearCurrentPdf: (state: INotefolioSlice) => {
      state.currentNotefolio = null;
    },
    onClearNotefolioList: (state: INotefolioSlice) => {
      state.notefolioList = [];
    },
    onSelectCategory: (state: INotefolioSlice, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    onChangePdfPageNumber: (state: INotefolioSlice, action: PayloadAction<number>) => {
      state.pdfMobilePage = action.payload;
    },
    onFilterCurrentNoteFolio: (state: INotefolioSlice, action: PayloadAction<string>) => {
      state.currentNotefolio = state.notefolioList.filter((item) => item.id === action.payload)[0];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getNotefolioList.pending, (state) => {
        state.getNotefolioListLoading = true;
      })
      .addCase(getNotefolioList.fulfilled, (state, action: PayloadAction<INotefolio[]>) => {
        state.getNotefolioListLoading = false;
        state.notefolioList.push(...action.payload);
      })
      .addCase(getNotefolioList.rejected, (state, action: ReturnType<typeof getNotefolioList.rejected>) => {
        state.getNotefolioListLoading = false;
        state.getNotefolioListError = action.error;
      })

      .addCase(getNotefolio.pending, (state) => {
        state.getNotefolioLoading = true;
      })
      .addCase(getNotefolio.fulfilled, (state, action: PayloadAction<INotefolio>) => {
        state.getNotefolioLoading = false;
        // state.currentNotefolio = action.payload;
      })
      .addCase(getNotefolio.rejected, (state, action: ReturnType<typeof getNotefolio.rejected>) => {
        state.getNotefolioLoading = false;
        state.getNotefolioError = action.error;
      })

      .addCase(getRecruitList.pending, (state) => {
        state.getRecruitListLoading = true;
      })
      .addCase(getRecruitList.fulfilled, (state, action: PayloadAction<IRecruit[]>) => {
        state.getRecruitListLoading = false;
        state.recruitList = action.payload;
      })
      .addCase(getRecruitList.rejected, (state, action: ReturnType<typeof getRecruitList.rejected>) => {
        state.getRecruitListLoading = false;
        state.getRecruitListError = action.error;
      })

      .addCase(getCreatorList.pending, (state) => {
        state.getCreatorListLoading = true;
      })
      .addCase(getCreatorList.fulfilled, (state, action: PayloadAction<ICreator[]>) => {
        state.getCreatorListLoading = false;
        state.creatorList = action.payload;
      })
      .addCase(getCreatorList.rejected, (state, action: ReturnType<typeof getCreatorList.rejected>) => {
        state.getCreatorListLoading = false;
        state.getCreatorListError = action.error;
      })
      .addCase(getAcademyList.pending, (state) => {
        state.getAcademyListLoading = true;
      })
      .addCase(getAcademyList.fulfilled, (state, action: PayloadAction<IAcademy[]>) => {
        state.getAcademyListLoading = false;
        state.academyList = action.payload;
      })
      .addCase(getAcademyList.rejected, (state, action: ReturnType<typeof getAcademyList.rejected>) => {
        state.getAcademyListLoading = false;
        state.getAcademyListError = action.error;
      }),
});
export const {
  onChangePdfPageNumber,
  onTogglePdfModalState,
  onToggleSearchModalState,
  onClearCurrentPdf,
  onClearNotefolioList,
  onSelectCategory,
  onFilterCurrentNoteFolio,
} = notefolioSlice.actions;
export default notefolioSlice.reducer;

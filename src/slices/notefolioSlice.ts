import { getCreatorList, getNotefolio, getNotefolioList, getRecruitList } from "./../actions/notefolioAction";
import { ICreator, INotefolio, INotefolioSlice, IRecruit } from "./../customTypes/notefolio";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: INotefolioSlice = {
  notefolioList: [],
  recruitList: [],
  creatorList: [],
  currentNotefolio: null,
  pdfModalState: false,
  getNotefolioListLoading: false,
  getNotefolioListError: null,
  getNotefolioLoading: false,
  getNotefolioError: null,
  getRecruitListLoading: false,
  getRecruitListError: null,
  getCreatorListLoading: false,
  getCreatorListError: null,
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
        document.body.style.overflow = "unset";
      }
    },
    onClearCurrentPdf: (state: INotefolioSlice) => {
      state.currentNotefolio = null;
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
        state.currentNotefolio = action.payload;
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
      }),
});
export const { onTogglePdfModalState, onClearCurrentPdf } = notefolioSlice.actions;
export default notefolioSlice.reducer;

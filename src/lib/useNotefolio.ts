import { useCallback } from "react";
import { getNotefolio, getNotefolioList } from "./../actions/notefolioAction";
import { useAppDispatch } from "./../store/hook";
const useNotefolio = () => {
  const dispatch = useAppDispatch();

  const onLoadNotefolioList = useCallback(
    async (page: number) => {
      await dispatch(getNotefolioList(page));
    },
    [dispatch]
  );

  const onLoadNotefolio = useCallback(
    async (id: string) => {
      await dispatch(getNotefolio(id));
    },
    [dispatch]
  );

  return { onLoadNotefolio, onLoadNotefolioList };
};
export default useNotefolio;

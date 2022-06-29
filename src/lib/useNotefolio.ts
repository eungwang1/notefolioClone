import { useCallback } from "react";
import { getCreatorList, getNotefolio, getNotefolioList, getRecruitList } from "./../actions/notefolioAction";
import { useAppDispatch } from "./../store/hook";
const useNotefolio = () => {
  const dispatch = useAppDispatch();

  const onLoadNotefolioList = useCallback(
    async (page: number) => {
      await dispatch(getNotefolioList(page));
    },
    [dispatch]
  );

  const onLoadRecruitList = useCallback(async () => {
    await dispatch(getRecruitList());
  }, [dispatch]);

  const onLoadCreatorList = useCallback(async () => {
    await dispatch(getCreatorList());
  }, [dispatch]);

  const onLoadNotefolio = useCallback(
    async (id: string) => {
      await dispatch(getNotefolio(id));
    },
    [dispatch]
  );

  return { onLoadNotefolio, onLoadNotefolioList, onLoadRecruitList, onLoadCreatorList };
};
export default useNotefolio;

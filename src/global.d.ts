import { RootState } from "@store/configureStore";

declare module "react-redux" {
  export declare const useSelector: <T>(selector: (state: RootState) => T, equalityFn?: EqualityFn<T>) => T;
}

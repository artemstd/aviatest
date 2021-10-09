import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootState } from "../types";

const useCustomSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useCustomSelector;
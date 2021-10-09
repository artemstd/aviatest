import { useDispatch } from "react-redux";
import { TCustomDispatch } from "../types";

const useCustomDispatch = () => useDispatch<TCustomDispatch>();

export default useCustomDispatch;
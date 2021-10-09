import axiosCustom from "../../common/api/axiosCustom";
import { IFetchSearchIdResponseData, IFetchTicketsRequestParams, IFetchTicketsResponseData } from "./types";

export const fetchSearchId = () => axiosCustom.get<IFetchSearchIdResponseData>("/search");

export const fetchTickets = (params: IFetchTicketsRequestParams) => axiosCustom.get<IFetchTicketsResponseData>("/tickets", { params })
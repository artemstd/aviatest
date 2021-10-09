import { CaseReducer, PayloadAction, SliceCaseReducers, Action } from "@reduxjs/toolkit";

interface ITicketsEntitySegment {
    // Код города (iata)
    origin: string
    // Код города (iata)
    destination: string
    // Дата и время вылета
    date: string
    // Массив кодов (iata) городов с пересадками
    stops: string[]
    // Общее время перелёта в минутах
    duration: number
};

export interface ITicketsEntity {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    ITicketsEntitySegment,
    ITicketsEntitySegment
  ]
}

export interface ITicketsAdditionalState {
  searchStop: IFetchTicketsResponseData["stop"],
  isLoading: boolean,
  searchId?: IFetchSearchIdResponseData["searchId"],
  error?: string
}

export interface ITicketsReducers<State> extends SliceCaseReducers<State> {
  loadingStart: CaseReducer<State>,
  loadingSuccess: CaseReducer<State>,
  loadingError: CaseReducer<State, PayloadAction<string>>,
  searchIdFetched: CaseReducer<State, PayloadAction<IFetchSearchIdResponseData>>,
  ticketsFetched: CaseReducer<State, PayloadAction<IFetchTicketsResponseData>>
}

export type TTicketsName = "tickets";

export interface IFetchTicketsRequestParams {
  searchId: IFetchSearchIdResponseData["searchId"]
}

export interface IFetchTicketsResponseData {
  tickets: ITicketsEntity[],
  stop: boolean
}

export interface IFetchSearchIdResponseData {
  searchId: string
}
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

interface props {
  page?: number;
  sortby?: "view" | "rate" | "newest";
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kodoumo.ir/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getVideos: builder.query<any, props>({
      query: ({ page, sortby }) =>
        `/wp-json/api/v2/reviews-category/animations?page=${page}&sortby=${sortby}`,
    }),
  }),
});

export const { useGetVideosQuery } = api;

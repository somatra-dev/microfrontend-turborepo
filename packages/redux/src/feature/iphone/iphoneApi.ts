import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IphoneProduct } from "./iphoneType";



const baseUrl = '';

export const iphoneApi = createApi({
  reducerPath: 'iphoneApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include'
  }),
  tagTypes: ['iphone'],
  endpoints: (build) => ({
    getIphones: build.query<IphoneProduct[], void>({
      query: () => ({
        url: '/api/v1/iphones',
        method: 'GET'
      }),
      providesTags: ['iphone']
    }),

  })
});

export const { useGetIphonesQuery } = iphoneApi;

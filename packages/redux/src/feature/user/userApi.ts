import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MeResponse } from './userType';

const baseUrl = '';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include'
  }),
  tagTypes: ['Me'],
  endpoints: (build) => ({
    getMe: build.query<MeResponse, void>({
      query: () => ({
        url: '/auth/me',
        method: 'GET'
      }),
      providesTags: ['Me']
    }),

  })
});

export const { useGetMeQuery } = userApi;

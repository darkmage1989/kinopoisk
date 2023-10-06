import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const Key: string | undefined = 'SQYRK65-QECMEJC-G6V9JJN-TP64PPD' // SQYRK65-QECMEJC-G6V9JJN-TP64PPD
export const postsApi = createApi({ //ртк запрос на апи
  
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/",
  }),
  endpoints: (builder) => ({
    getPostsApi: builder.query({
      query: ({movieName}) => {
        return {
          url: `v1.2/movie/search?limit=10&query=${movieName}`,
          method: 'GET',
          headers: {'X-API-KEY': `${Key}`},
        };
      },
    }),
    getMoveId: builder.query({
      query: ({moviePageData}) => {
        return {
          url: `https://api.kinopoisk.dev/v1.3/movie/${moviePageData}`,
          method: 'GET',
          headers: {'X-API-KEY': `${Key}`},
        };
      },
    }),
  }),
  
});
export const { useGetPostsApiQuery, useGetMoveIdQuery } = postsApi;


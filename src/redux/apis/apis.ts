import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const postsApi = createApi({ //ртк запрос на апи
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/",
  }),
  endpoints: (builder) => ({
    getPostsApi: builder.query({
      query: () => {
        return {
          url: `v1.2/movie/search?limit=10&query=чужой`,
          method: 'GET',
          headers: {'X-API-KEY': 'SQYRK65-QECMEJC-G6V9JJN-TP64PPD'},
        };
      },
    }),
  }),
});
export const { useGetPostsApiQuery } = postsApi;

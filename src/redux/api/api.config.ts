import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const initializeApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: async (headers) => {
      let token = sessionStorage.getItem("token");
      if (!token) {
        const response = await axios.post(
          `https://api.beranibersama.org/auth/create`,
          { app_id: "026c5afd-260d-4b92-83db-8605bfc0102c" },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        token = response.data.token as string;

        sessionStorage.setItem("token", token);
      }
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default initializeApi;

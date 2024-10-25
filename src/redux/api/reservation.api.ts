import apiConfig from "./api.config";

interface ReservationQueryParams {
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  searchTerm?: string;
}

export const reservationApi = apiConfig.injectEndpoints({
  endpoints: (builder) => ({
    getHivTest: builder.query<any, ReservationQueryParams>({
      query: ({ startDate = "", endDate = "", page = 1, limit, searchTerm = "" }) => ({
        url: `/reservations?start_date=${startDate}&end_date=${endDate}&page=${page}&limit=${limit || 10}&reservation_service_id=2&q=${searchTerm}`,
      }),
    }),

    getPrep: builder.query<any, ReservationQueryParams>({
      query: ({ startDate = "", endDate = "", page = 1, limit, searchTerm = "" }) => ({
        url: `/reservations?start_date=${startDate}&end_date=${endDate}&page=${page}&limit=${limit || 10}&reservation_service_id=5&q=${searchTerm}`,
      }),
    }),

    getRefillArv: builder.query<any, ReservationQueryParams>({
      query: ({ startDate = "", endDate = "", page = 1, limit, searchTerm = "" }) => ({
        url: `/reservations?start_date=${startDate}&end_date=${endDate}&page=${page}&limit=${limit || 10}&reservation_service_id=3&q=${searchTerm}`,
      }),
    }),

    getViralLoad: builder.query<any, ReservationQueryParams>({
      query: ({ startDate = "", endDate = "", page = 1, limit, searchTerm = "" }) => ({
        url: `/reservations?start_date=${startDate}&end_date=${endDate}&page=${page}&limit=${limit || 10}&reservation_service_id=4&q=${searchTerm}`,
      }),
    }),
  }),
});

export const {
  useGetHivTestQuery, //
  useGetPrepQuery,
  useGetRefillArvQuery,
  useGetViralLoadQuery,
} = reservationApi;

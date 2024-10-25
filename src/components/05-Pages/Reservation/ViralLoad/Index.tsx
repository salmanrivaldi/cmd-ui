"use client";

import ReservationLayout from "@/components/04-Templates/Layout/ReservationLayout";
import TableWithCollapse from "@/components/03-Organisms/Tables/TableWithCollapse";
import { useGetViralLoadQuery } from "@/redux/api/reservation.api";
import { useState, useEffect } from "react";
import formatDate from "@/helpers/dateFormatter";
import serviceIdToDescription from "@/helpers/serviceIdToDescription";
import clientBookingToDescription from "@/helpers/clientBookingToDescription";
import LoadingSpinner from "@/components/01-Atoms/Indicator/LoadingSpinner";

const headers: string[] = ["Cam code", "Tanggal submit reservasi", "Jadwal reservasi", "UIC", "NIK/BPJS", "No. Antri", "Puskesmas", "Hadir"];

const headerMap: { [key: string]: string } = {
  "Cam code": "cam_code",
  "Tanggal submit reservasi": "created_at",
  "Jadwal reservasi": "res_date",
  UIC: "uic",
  "NIK/BPJS": "identity_number",
  "No. Antri": "booking_code",
  Puskesmas: "clinic_name",
  Hadir: "is_arrived",
};

const collapsibleFields: string[] = ["Status VL", "Tanggal VL selanjutnya", "Sudah PN", "Unique link"];

const collapsibleFieldsMap: { [key: string]: string } = {
  "Status VL": "field_belum_ada",
  "Tanggal VL selanjutnya": "field_belum_ada",
  "Sudah PN": "field_belum_ada",
  "Unique link": "field_belum_ada",
};

export default function Index() {
  const [limit, setLimit] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>(searchTerm);
  const [page, setPage] = useState<number>(1);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    if (searchTerm !== "") {
      setIsSearching(true); // Munculkan loading saat mulai mengetik
    }

    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); // Set search term yang di-debounce
      setIsSearching(false); // Sembunyikan loading setelah debounce selesai
    }, 1500);

    return () => {
      clearTimeout(handler); // Bersihkan timeout
    };
  }, [searchTerm]);

  const {
    data: reservationData,
    error: reservationError,
    isLoading: isLoadingReservation,
  } = useGetViralLoadQuery({
    limit,
    page,
    searchTerm: debouncedSearchTerm,
  });

  if (reservationError) {
    let errorMessage = "An error occurred.";
    if ("status" in reservationError) {
      errorMessage = `Error: ${reservationError.status}`;
      if (reservationError.data && typeof reservationError.data === "object" && "message" in reservationError.data) {
        errorMessage = (reservationError.data as { message: string }).message;
      }
    } else if ("message" in reservationError) {
      errorMessage = reservationError.message ?? "An unknown error occurred.";
    }
    return <p>{errorMessage}</p>;
  }

  const rows = (reservationData?.data || []).map((row: Record<string, any>) => ({
    ...row,
    res_date: formatDate(row.res_date, true),
    reservation_service_id: serviceIdToDescription(row.reservation_service_id),
    is_arrived: row.is_arrived === 1 ? "Iya" : "Tidak",
    identity_number: row.identity_number ? row.identity_number : "-",
    booking_code: row.booking_code ? row.booking_code : "-",
    client_booking: clientBookingToDescription(row.client_booking),
    created_at: "-",
    field_belum_ada: "-",
  }));

  const totalRecord = reservationData?.total_record || 0;
  const totalPages = Math.ceil(totalRecord / limit);

  return (
    <ReservationLayout title="Reservasi Tes HIV">
      <TableWithCollapse
        rows={rows}
        limit={limit}
        searchTerm={searchTerm}
        header={headers}
        headerMap={headerMap}
        collapsibleFields={collapsibleFields}
        collapsibleFieldsMap={collapsibleFieldsMap}
        currentPage={page}
        totalPages={totalPages}
        isLoading={isSearching || isLoadingReservation}
        onLimitChange={setLimit}
        onSearchTermChange={setSearchTerm}
        onPageChange={setPage}
      />
    </ReservationLayout>
  );
}

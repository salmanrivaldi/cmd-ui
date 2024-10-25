"use client";

import ReservationLayout from "@/components/04-Templates/Layout/ReservationLayout";
import TableWithCollapse from "@/components/03-Organisms/Tables/TableWithCollapse";
import { useGetPrepQuery } from "@/redux/api/reservation.api";
import { useState, useEffect } from "react";
import formatDate from "@/helpers/dateFormatter";
import serviceIdToDescription from "@/helpers/serviceIdToDescription";
import clientBookingToDescription from "@/helpers/clientBookingToDescription";
import LoadingSpinner from "@/components/01-Atoms/Indicator/LoadingSpinner";

const headers: string[] = ["Cam code", "Layanan yang dipilih", "Janji temu", "Umur", "Mengidentifikasi dirinya sebagai", "Jadwal reservasi", "UIC", "NIK/BPJS"];

const headerMap: { [key: string]: string } = {
  "Cam code": "cam_code",
  "Layanan yang dipilih": "reservation_service_id",
  "Janji temu": "client_booking",
  Umur: "client_age",
  "Mengidentifikasi dirinya sebagai": "gender_name",
  "Jadwal reservasi": "res_date",
  UIC: "uic",
  "NIK/BPJS": "identity_number",
};

const collapsibleFields: string[] = ["No. Antri", "Puskesmas", "Hadir", "Hasil tes", "Inisiasi ARV", "HP/WA", "Email", "Tanggal submit reservasi"];

const collapsibleFieldsMap: { [key: string]: string } = {
  "No. Antri": "booking_code",
  Puskesmas: "clinic_name",
  Hadir: "is_arrived",
  "HP/WA": "client_phone_num",
  Email: "client_email",
  "Tanggal submit reservasi": "created_at",
};

export default function Index() {
  const [limit, setLimit] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Term pencarian
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>(searchTerm);
  const [page, setPage] = useState<number>(1);
  const [isSearching, setIsSearching] = useState<boolean>(false); // State untuk tracking pencarian

  // Debounce untuk pencarian
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

  // Query API menggunakan debounced search term
  const {
    data: reservationData,
    error: reservationError,
    isLoading: isLoadingReservation,
  } = useGetPrepQuery({
    limit,
    page,
    searchTerm: debouncedSearchTerm, // Gunakan term yang sudah di-debounce
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

  // Proses data yang diterima dari API
  const rows = (reservationData?.data || []).map((row: Record<string, any>) => ({
    ...row,
    res_date: formatDate(row.res_date, true), // Format tanggal
    reservation_service_id: serviceIdToDescription(row.reservation_service_id), // Deskripsi service
    is_arrived: row.is_arrived === 1 ? "Iya" : "Tidak",
    identity_number: row.identity_number ? row.identity_number : "-",
    booking_code: row.booking_code ? row.booking_code : "-",
    client_booking: clientBookingToDescription(row.client_booking),
    created_at: "-",
  }));

  const totalRecord = reservationData?.total_record || 0;
  const totalPages = Math.ceil(totalRecord / limit);

  return (
    <ReservationLayout title="Reservasi PrEP">
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

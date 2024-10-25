const clientBookingToDescription = (booking: string): string => {
  const bookingMap: { [key: string]: string } = {
    myself: "Saya sendiri",
    child: "Anak saya",
    friend: "Teman saya",
    other: "Lainnya",
  };

  return bookingMap[booking] || `Lainnya (${booking})`;
};

export default clientBookingToDescription;

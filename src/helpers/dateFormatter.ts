import moment from "moment";
import "moment/locale/id"; // Import locale Indonesia

const formatDate = (isoDateString: string, showTime: boolean = false): string => {
  moment.locale("id");
  if (showTime) {
    return moment(isoDateString).utcOffset("+07:00").format(" HH:mm, D MMMM YYYY");
  }
  return moment(isoDateString).utcOffset("+07:00").format("D MMMM YYYY");
};

export default formatDate;

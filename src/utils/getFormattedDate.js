import { formatDistanceToNow, format, parseISO } from "date-fns";

const GetFormattedDate = (date) => {
  const fomattedDate = formatDistanceToNow(parseISO(date), { addSuffix: true });
  return fomattedDate;
};
export default GetFormattedDate;

export const getTodaysDate = () => {
  const today = new Date();
  const formattedDate = format(today, "dd-MM-yyyy");
  return formattedDate;
};

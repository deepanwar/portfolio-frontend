import dayjs from "dayjs";

export const formatDate = (date: string, format = "MMM YYYY") => {
  if (!dayjs(date).isValid()) return date;
  return dayjs(date).format(format);
};

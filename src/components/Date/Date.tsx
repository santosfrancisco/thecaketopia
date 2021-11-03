import { isValid, parseISO, format } from "date-fns";
import { StyledDate } from "./styles";

const Date = ({ dateString }) => {
  if (!isValid(parseISO(dateString))) {
    return <span>"No date"</span>;
  }
  const date = parseISO(dateString);
  return (
    <StyledDate dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</StyledDate>
  );
};

export default Date;

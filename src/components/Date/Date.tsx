import { isValid, parseISO, format, formatDistanceToNow } from "date-fns";
import { StyledDate } from "./styles";
import ptBR from "date-fns/locale/pt-BR";

const Date = ({ dateString }) => {
  if (!isValid(parseISO(dateString))) {
    return <span>"No date"</span>;
  }
  const date = parseISO(dateString);
  return (
    <StyledDate
      dateTime={dateString}
      title={format(date, "PPP", { locale: ptBR })}
    >
      {format(date, "PPP", { locale: ptBR })}
    </StyledDate>
  );
};

export const DateToNow = ({ dateString }) => {
  if (!isValid(parseISO(dateString))) {
    return <span>"No date"</span>;
  }
  const date = parseISO(dateString);
  return (
    <StyledDate
      style={{ fontStyle: "italic", fontWeight: "normal" }}
      dateTime={dateString}
      title={format(date, "PPP", { locale: ptBR })}
    >
      {formatDistanceToNow(date, { locale: ptBR, addSuffix: true })}
    </StyledDate>
  );
};

export default Date;

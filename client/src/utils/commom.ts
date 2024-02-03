export function formatDate(date: Date | undefined): string {
  if (date == undefined) {
    return "";
  }
  const parserDate = new Date(date);

  const month = Number(parserDate.getMonth()) + 1;
  const day = parserDate.getDate();
  return `${formatMonth(month.toString())}, ${day}`;
}

export function formatDateWithYear(date: Date | undefined): string {
  if (date == undefined) {
    return "";
  }

  const parserDate = new Date(date);

  const month = Number(parserDate.getMonth()) + 1;
  const day = parserDate.getDate();
  const year = parserDate.getFullYear();
  return `${formatMonth(month.toString())}, ${day}, ${year}`;
}

const formatMonth = (month: string): string => {
  console.log(month);
  switch (month) {
    case "1":
      return "Jan";
    case "2":
      return "Feb";
    case "3":
      return "Mar";
    case "4":
      return "Apr";
    case "5":
      return "May";
    case "6":
      return "Jun";
    case "7":
      return "Jul";
    case "8":
      return "Aug";
    case "9":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
    default:
      return "--";
  }
};

export function goToUrl(url: string) {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.opener = null;
  }
}

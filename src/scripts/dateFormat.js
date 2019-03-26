export function dateFormat(data, onlyDate) {
  var date = new Date(data);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (onlyDate) {
    return [
      (day > 9 ? "" : "0") + day,
      "-",
      (month > 9 ? "" : "0") + month,
      "-",
      year
    ].join("");
  } else {
    return [
      (day > 9 ? "" : "0") + day,
      "-",
      (month > 9 ? "" : "0") + month,
      "-",
      year,
      " ",
      (hour > 9 ? "" : "0") + hour,
      ":",
      (minute > 9 ? "" : "0") + minute
    ].join("");
  }
}

export function getHourFromDate(data) {
  var date = new Date(data);
  let hour = date.getHours();
  let minute = date.getMinutes();

  return [
    (hour > 9 ? "" : "0") + hour,
    ":",
    (minute > 9 ? "" : "0") + minute
  ].join("");
}

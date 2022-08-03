const dateFormat = (stringDate) => {
  let date = new Date(stringDate);
  let padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join(".");
};
export { dateFormat };

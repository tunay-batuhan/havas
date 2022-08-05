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

// calculate start to end day
const beetwenTwoDate = (date1, date2) => {
  let dateOne = new Date(date1);
  let dateTwo = new Date(date2);

  let differencetime =
    (dateTwo.getTime() - dateOne.getTime()) / (1000 * 3600 * 24);
  return Math.ceil(differencetime);
};

export { dateFormat, beetwenTwoDate };

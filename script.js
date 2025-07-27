const inputcard = document.querySelectorAll(".card__input");
const subBtn = document.querySelector(".card__button");

const validDay = (day) => {
  if (day && day > 0 && day <= 31) {
    return true;
  }
};

const validMonth = (month) => {
  if (month && month > 0 && month <= 12) {
    return true;
  }
};

const validyear = (year) => {
  const curryear = new Date().getFullYear();
  if (year && year > 0 && year <= curryear) {
    return true;
  }
};

const isValided = (dayEle, monthEle, yearEle) => {
  let isValid = [false, false, false];
  if (!validDay(dayEle.value)) {
    dayEle.classList.add("card__input--error");
  } else {
    isValid[0] = true;
    dayEle.classList.remove("card__input--error");
  }

  if (!validMonth(monthEle.value)) {
    monthEle.classList.add("card__input--error");
  } else {
    isValid[1] = true;
    monthEle.classList.remove("card__input--error");
  }

  if (!validyear(yearEle.value)) {
    yearEle.classList.add("card__input--error");
  } else {
    isValid[2] = true;
    yearEle.classList.remove("card__input--error");
  }
  return isValid.every((item) => item === true);
};

const calclateAge = (year, month, day) => {
  const currDate = new Date();
  const birthdate = new Date(year, month - 1, day);
  let age = currDate.getFullYear() - birthdate.getFullYear();
  const monthDiff = currDate.getMonth() - birthdate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  return age;
};

const onClickedHandeler = () => {
  const dayEle = document.querySelector(".card__input[name=day]");
  const monthEle = document.querySelector(".card__input[name=month]");
  const yearEle = document.querySelector(".card__input[name=year]");
  const result = document.querySelector(".card__resultValue");
  result.textContent = calclateAge(yearEle.value, monthEle.value, dayEle.value);
  if (!isValided(dayEle, monthEle, yearEle)) {
    result.textContent = "--";
    return;
  }
};

inputcard.forEach((item) => {
  item.addEventListener("keydown", (event) => {
    event.key === "Enter" && onClickedHandeler();
  });
});

subBtn.addEventListener("click", onClickedHandeler);

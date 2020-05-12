let currentDay = document.getElementById("day");
let currentMonth = document.getElementById("month");
let currentYear = document.getElementById("year");
let birthDay = document.getElementById("day1");

let birthMonth = document.getElementById("month1");
let birthYear = document.getElementById("year1").value;
let btn = document.querySelector(".btn");

// Display The curent day
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth());
let yyyy = today.getFullYear();
currentDay.value = dd;
currentMonth.value = mm;
currentYear.value = yyyy;

// Get full birth date Values

// btn.addEventListener("click", () => {
let selectedBirthmonth = birthMonth.options[birthMonth.selectedIndex].value;
let selectedBirthDay = birthDay.options[birthDay.selectedIndex].value;

let selectedCurrentmonth =
  currentMonth.options[currentMonth.selectedIndex].value;
let selectedCurrentDay = currentDay.options[currentDay.selectedIndex].value;
currentYear = currentYear.value;

var test = selectedCurrentDay - selectedBirthDay;
var ageInMonths = selectedCurrentmonth - selectedBirthmonth;
var ageInYears = currentYear - birthYear;
console.log(test);
console.log(ageInMonths);
console.log(ageInYears);

if (selectedBirthDay > selectedCurrentDay) {
} else {
  selectedCurrentDay - selectedBirthDay;
}
// });


/* ================================================================ */
function calculateAge(dob) {
  var now = new Date();
  var dob = new Date(dob);
  var year=now.getYear()-dob.getYear();
  var month=now.getMonth()-dob.getMonth();
  if(month<0){
    month=now.getMonth()+12-dob.getMonth();
    year=year-1;
  }
  var day=now.getDate()-dob.getDate();
  if(day<0){
    var monthNumber=dob.getMonth();
    var fullDate=getFullDate(monthNumber);
    day=now.getDate()+fullDate-dob.getDate();
    month=month-1;
  }

  return year+" Years, "+month+" Months, "+day+" Days!";
};
function getFullDate(x){
  switch(x){
    case 0:
      return 31;
      break;
    case 1:
      return 28;
      break;
    case 2:
      return 31;
      break;
    case 3:
      return 30;
      break;
    case 4:
      return 31;
      break;
    case 5:
      return 30;
      break;
    case 6:
      return 31;
      break;
    case 7:
      return 31;
      break;
    case 8:
      return 30;
      break;
    case 9:
      return 31;
      break;
    case 10:
      return 30;
      break;
    case 11:
      return 31;
  }
}
function getAge(){
  x=prompt("Please Enter Your Date of Birth in format (yyyy-mm-dd): ","");
  x=new Date(x);
  document.getElementById("age").innerHTML="Your age is: "+calculateAge(x);
}
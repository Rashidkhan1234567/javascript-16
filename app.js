// task1
let date = new Date();
document.getElementById("demo1").innerHTML = date + "<hr>";

//task2
let arr = [
  "january",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date1 = new Date();

document.getElementById("demo2").innerHTML =
  "Current Month is :" + arr[date1.getMonth()] + "<hr>";

//task3
let date2 = new Date().toDateString();
document.getElementById("demo3").innerHTML =
  "Today is :" + date2.slice(0, 4) + "<hr>";

//                                  task4

let arr2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let date3 = new Date().getDay();
//  document.getElementById("demo4").innerHTML = "Today is :"+ date2.slice(0 ,4);
if (arr2[date3] === "Sat" || arr2[date3] === "Sun") {
  document.getElementById("demo4").innerHTML =
    "Today is :" + "it's Fun Day <hr>";
} else {
  document.getElementById("demo4").innerHTML =
    "Today is :" + "it's a Noraml Day <hr>";
}

//task5

let date4 = new Date().getDate();
if (date4 <= 15) {
  document.getElementById("demo5").innerHTML =
    "First fifteen days of the month <hr>";
} else {
  document.getElementById("demo5").innerHTML =
    "Last fifteen days of the month <hr>";
}

//task6
let date6 = new Date();
document.getElementById("demo6").innerHTML = date6;
let date5 = new Date().getTime();
document.getElementById("demo7").innerHTML =
  "Elapsed milliseconds since jan 1 1970 : " + date5;
let sec = Math.floor(date5 / 1000);
let min = Math.floor(sec / 60);
document.getElementById("demo8").innerHTML =
  "Elapsed Minutes since jan 1 1970 : " + min + "<hr>";

//task7

let dhours = new Date().getHours();

if (dhours <= 11.99) {
  document.getElementById("demo9").innerHTML = `<h2> it's AM `;
} else {
  document.getElementById("demo9").innerHTML = `<h2> it's PM ` + "<hr>";
}

//task8
let laterDate = new Date(2020, 11, 31);
document.getElementById("demo10").innerHTML =
  "Later Date :" + laterDate + "<hr>";

//task9

let date8 = new Date(2024, 2, 11);
let date9 = new Date();
let timediff = date9 - date8;
let day = Math.floor(timediff / (1000 * 60 * 60 * 24));
document.getElementById("demo11").innerHTML =
  day + " Days Have Passed Since 1 Ramadan of 2024 <hr>";

//task10

let date10 = new Date();
document.getElementById("demo12").innerHTML = "On Reference Date " + date10;
let date11 = new Date(2024, 0, 1);
let mill = date10 - date11;
let sec2 = Math.floor(mill / 1000);
document.getElementById("demo13").innerHTML =
  sec2 + " Seconds had passed since begginning of the year <hr>";

//task11
let currentDate = new Date();
document.getElementById("demo14").innerHTML = "current Date : " + currentDate;
let currentHours = currentDate.getHours();

currentDate.setHours(currentHours - 1);
document.getElementById("demo15").innerHTML =
  "1 hour ago :" + currentDate + "<hr>";

//task12
let currentDates = new Date();
document.getElementById("demo16").innerHTML = "current Date : " + currentDate;
let currentyear = currentDate.getFullYear();

currentDates.setUTCFullYear(currentyear - 100);
document.getElementById("demo17").innerHTML =
  "100 year ago :" + currentDates + "<hr>";

// task13

let user = parseInt(prompt("what is your birth year ", "1994"));
document.getElementById("demo18").innerHTML = "your birth yearis " + user;
let date12 = new Date().getFullYear();
let now = date12 - user;

document.getElementById("demo19").innerHTML = "Your age is " + now + "<hr>";

//                     task14

function generateBill() {
  //  input values
  const customerName = document.getElementById("customerName").value;
  const units = parseFloat(document.getElementById("units").value);
  const chargesPerUnit = 16;
  const latePaymentSurcharge = 350;

  //  amounts
  const netAmountPayable = (units * chargesPerUnit).toFixed(2);
  const grossAmountPayable = (
    parseFloat(netAmountPayable) + latePaymentSurcharge
  ).toFixed(2);

  //  current month
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[currentDate.getMonth()];

  //  results
  document.getElementById("billResult").innerHTML = `
        <div><strong>Customer Name:</strong> ${customerName}</div>
        <div><strong>Current Month:</strong> ${currentMonth}</div>
        <div><strong>Number of Units:</strong> ${units}</div>
        <div><strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(
          2
        )}</div>
        <div><strong>Net Amount Payable (within Due Date):</strong> Rs ${netAmountPayable}</div>
        <div><strong>Late Payment Surcharge:</strong> Rs ${latePaymentSurcharge.toFixed(
          2
        )}</div>
        <div><strong>Gross Amount Payable (after Due Date):</strong> Rs ${grossAmountPayable}</div>
    `;
}

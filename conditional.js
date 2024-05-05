let year = 2000;
if (year % 4 == 0) {
    console.log(year, " It is a leap year");
}
else {
    console.log(year, " It is not a leap year");
}
// Conditional operator
let age = 150;
let accessAllow = age > 18 ? "You can drive" : "You cannot drive.";
console.log(accessAllow);
let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';
console.log(message);
let result;
let a = 5, b = 5;
(a + b < 4) ? result = "Below" : result = "Over";
console.log(result);
// Rewrite if else using multiple ternary operator
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let login = "Director";
(login == "Employee") ? console.log("Hello") :
    (login == 'Director') ? console.log("Greetings") :
        (login == '') ? console.log("No Login") :
            console.log("");
export {};

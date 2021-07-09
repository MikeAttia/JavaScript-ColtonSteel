// //logical operator &&
// const passowrd = prompt("enter your passowrd");
// if (passowrd.length >= 6 && passowrd.indexOf(" ") === -1) {
//     console.log("passowrd is valid")
// }
// else {
//     console.log("passowrd is invalid!")
// };
//***************************************** */
//Logical operator ||
const age = prompt("enter your age");
if (age >= 0 && age <= 5 || age >= 65) {
    console.log("FREE!!")
}
else if (age > 5 && age < 16) {
    console.log("$10")
}
else if (age >= 16 && age < 65) {
    console.log("$20")
}
else {
    console.log("invalid age!!")
};
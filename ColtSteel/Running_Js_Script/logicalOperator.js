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
// const age = prompt("enter your age");
// if (age >= 0 && age <= 5 || age >= 65) {
//     console.log("FREE!!")
// }
// else if (age > 5 && age < 16) {
//     console.log("$10")
// }
// else if (age >= 16 && age < 65) {
//     console.log("$20")
// }
// else {
//     console.log("invalid age!!")
// };
//**************************************** */
//logical operator not  !(expression).
//example1:
// const firstName = prompt("Enter your first name!");
// if (!firstName) {
//     console.log("TRy Again!")
// };


//example2:
// const age = prompt("Please enter your age!");
// if (!(age > 0 && age <= 5 || age >= 65)) {
//     console.log("$20")
// }
// else {
//     console.log("FREE!!")
// }
//************************************** * /
// switch Case Break

const day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    //if you don't use the break then the code will
    //keep running untill the end.
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednensday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday yaaaay!");
        break;
    default:
        console.log("I Don't Know That!!!!");

};
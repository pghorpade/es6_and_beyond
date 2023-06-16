import "./styles.css";

// Difference between let and const

// const name = "Parinita"
// name = "Mulak"

let name = "Parinita";
name = "Mulak";

console.log(name);

// what is difference between var and [let and const]

// lets write a for loop with a var
// variables declared with var keyword are avaiable at global level throughout the file

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// lets write a for loop with a let
// in this example we get an error in the console as variable j is not defined , as it is not available beyond the scope of the for loop
for (let j = 0; j < 5; j++) {
  console.log(j);
}
console.log(j);

// lest ssay we have  function to checkpassword which accepts an argumen of password

function checkPassword(password) {
  const valid = password.length > 6;
  if (valid) {
    const message = " Ypur password is valid";
    console.log(message);
  } else {
    const message = " Ypur password is not valid";
    console.log(message);
  }
}
// lets invoke the function and see if it works
// we can have 2 message variables as they are declared in different blocks
checkPassword('1234')
checkPassword('1234567')

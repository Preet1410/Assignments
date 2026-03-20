let username = 'suresh'
let password = '1234'

let name = 'suresh'
let pass = '1234'


if (name == username && pass == password) {
    console.log('Login successful!')

} else if (name != username && pass != password) {
    console.log('Both incorrect')

} else if (name != username) {
    console.log("Incorrect username");

} else {
    console.log('Incorrect password');

}
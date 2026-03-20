let Member = true;
let cartValue = 1200;

if ((Member && cartValue > 1000) || cartValue > 2000) {
    console.log("You are eligible for free delivery!");
} else {
    console.log("Delivery charges apply.");
}
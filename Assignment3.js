function numbers(num) {
    if (num > 0) {
        console.log("the number is positive")

    } else if (num < 0) {
        console.log("the number is negative")

    } else {
        console.log("the number is zero")
    }

    if (num % 2 == 0) {
        console.log("the number is even")
    } else {
        console.log("the number is odd")
    }
}

numbers(5)
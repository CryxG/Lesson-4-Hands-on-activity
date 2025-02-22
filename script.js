function checkEvenOdd(number) {
    if (number === "") {
        document.getElementById("even-odd-message").innerHTML = "Please enter a number.";
    } else if (number % 2 === 0) {
        document.getElementById("even-odd-message").innerHTML = "The number " + number + " is even.";
    } else {
        document.getElementById("even-odd-message").innerHTML = "The number " + number + " is odd.";
    }
}

document.querySelector("button").addEventListener("click", function () {
    const number = document.querySelector("input").value;
    checkEvenOdd(number); // Directly pass input value
});

// print numbers from 1 to 10 in console
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

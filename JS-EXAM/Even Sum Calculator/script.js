function calculateEvenSum() {

    let input = document.getElementById("numbers").value;

    let numbersArray = input.split(",").map(Number);

    let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            sum = sum + numbersArray[i];
        }
    }

    document.getElementById("result").innerHTML =
        "Sum of Even Numbers: " + sum;
}

function countVowels() {

    // Get input value
    let text = document.getElementById("textInput").value.trim();

    // Check if input is empty
    if (text === "") {
        document.getElementById("result").innerHTML =
            "Please enter some text first!";
        return;
    }

    let vowels = "aeiouAEIOU";
    let count = 0;

    // Loop through string
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }

    // Show result
    document.getElementById("result").innerHTML =
        "Number of Vowels: " + count;
}
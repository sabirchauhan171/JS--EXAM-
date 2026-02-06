function changeColor() {

    let colors = [
        "#0b132b",
        "#1c2541",
        "#3a86ff",
        "#8338ec",
        "#2ec4b6",
        "#ffbe0b"
    ];

    let random = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[random];
}

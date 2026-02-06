function startLoading() {

    document.getElementById("message").innerHTML = "Loading...";

    setTimeout(function () {
        document.getElementById("message").innerHTML = "Data Loaded";
    }, 3000);
}

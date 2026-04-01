let text = document.getElementById("text");

setInterval(() => {
    if (text.style.visibility === "hidden") {
        text.style.visibility = "visible";
    } else {
        text.style.visibility = "hidden";
    }
}, 500);
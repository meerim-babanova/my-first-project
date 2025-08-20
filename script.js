function changeColor() {
    const heading = document.querySelector("h1");

    const colors = [ "darkblue", "darkred", "darkyeallow", "darkgreen"];
    const randomColor = colors[ Math.floor(Math.random()*colors.length)];

    heading.style.color = randomColor;
}
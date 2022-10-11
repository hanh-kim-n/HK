function changetheme() {
    const clr = document.getElementById("color").value;
    const theme = document.getElementsByClassName("theme");
    const theme1 = document.getElementsByClassName("theme1");
    const color_map = {
        'black': '#000000',
        'yellow': '#caa231',
        'red': '#90463b',
        'green': '#2d8f8a'
    }

    for (const element1 of theme1) {
        element1.style.background = clr;
    }
    for (const element of theme) {
        element.style.color = color_map[clr];

    }
}
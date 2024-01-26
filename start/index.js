// select het html-element met de ID "brand"
let start = document.querySelector('#brand');
// defineer de var ex en wijs deze de waarde 10 toe
let ex = 10;
// definieer de functie swing met een parameter element
function swing(element) {
    // definieer de functie update met een parameter time
    function update(time) {
        // bereken de horizontale rotatiehoek (x) en verticale rotatiehoek (y) op basis van de tijd
        const x = Math.sin(time / 1231) * ex;
        const y = Math.sin(time / 1458) * ex;

        // Pas de rotatiehoeken toe op het element met behulp van CSS transform
        element.style.transform = [
            `rotateX(${x}deg)`,
            `rotateY(${y}deg)`
        ].join(' ');

        // roep de functie update opnieuw aan met requestAnimationFrame voor een soepele animatie
        requestAnimationFrame(update);
    }
    // roep de functie update aan met een tijd van 0 om de animatie te starten
    update(0);
}
swing(start);

let start_button = start.querySelector('a');
let og_color = start_button.style.color;
let inter = 0;

start.addEventListener('mouseover', (e) => {
    ex = 20;
    inter = setInterval(() => {
        start_button.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);
});

start.addEventListener('mouseout', (e) => {
    ex = 10;
    clearInterval(inter);
    start_button.style.color = og_color;
});
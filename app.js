/*
// Parallax-Effekt für den neuen Abschnitt hinzufügen
window.addEventListener('scroll', function() {
    const parallax2 = document.querySelector('#parallax2');
    const scrollValue = window.scrollY;
    parallax2.style.transform = 'translateY(' + scrollValue * 0.5 + 'px)';
});
*/

// JavaScript-Code, um die Mausbewegungsanimation anzuzeigen
const animationContainer = document.querySelector('.animation-container');

document.addEventListener('mousemove', (e) => {
    const numCircles = 3; // Anzahl der zu erstellenden Kreise

    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';

        const size = Math.random() * 80 + 10; // Zufällige Größe zwischen 10px und 80px
        const duration = Math.random() * 2 + 1; // Zufällige Dauer zwischen 1s und 3s

        // Berechnen Sie eine zufällige Versatzposition, die innerhalb der Kreisgröße bleibt
        const offsetX = Math.random() * (size - 10); // -10, um die Mitte des Kreises zu berücksichtigen
        const offsetY = Math.random() * (size - 10); // -10, um die Mitte des Kreises zu berücksichtigen

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        // Verwenden Sie die Mausposition minus den Versatz, um die Position des Kreises festzulegen
        circle.style.left = `${e.clientX - offsetX}px`;
        circle.style.top = `${e.clientY - offsetY}px`;

        circle.style.animation = `scale-up ${duration}s linear`;

        // Zufällige Farbe generieren (Hexadezimal)
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        circle.style.backgroundColor = randomColor; // Setzen Sie die Hintergrundfarbe

        animationContainer.appendChild(circle);

        // Entferne das Element nach der Animation, um die Leistung zu optimieren
        circle.addEventListener('animationend', () => {
            circle.remove();
        });
    }
});



// JavaScript-Code, um die Konfetti um den Cursor herum anzuzeigen
const confettiContainer = document.querySelector('.confetti-container');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${clientX}px`;
    confetti.style.top = `${clientY}px`;
    confettiContainer.appendChild(confetti);

    // Entferne das Konfetti nach einer bestimmten Zeit, um die Leistung zu verbessern
    setTimeout(() => {
        confetti.remove();
    }, 2000);
});

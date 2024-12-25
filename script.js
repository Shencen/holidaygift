// script.js
const textElement = document.getElementById("gradient-text");
const text = textElement.textContent;
const colors = [
	"rgb(178, 237, 255)",
	"rgb(243, 194, 255)",
];
textElement.innerHTML = ""; // Limpia el contenido original

// Crea spans para cada letra
text.split("").forEach((letter, index) => {
	const span = document.createElement("span");
	span.textContent = letter === " " ? "\u00A0" : letter; // Maneja espacios
	textElement.appendChild(span);
});

// Anima los colores
function animateColors() {
	const spans = textElement.querySelectorAll("span");
	spans.forEach((span, index) => {
		const colorIndex = (index + Math.floor(Date.now() / 100)) % colors.length; // Reduce el divisor para aumentar la velocidad
		span.style.color = colors[colorIndex];
	});
	requestAnimationFrame(animateColors);
}

animateColors();

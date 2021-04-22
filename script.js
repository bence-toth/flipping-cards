const minFieldSize = 100;

const horizontals = Math.floor(window.innerWidth / minFieldSize);
const fieldWidth = `${100 / horizontals}%`;

const verticals = Math.floor(window.innerHeight / minFieldSize);
const fieldHeight = `${100 / verticals}%`;

const numberOfFields = horizontals * verticals;

const fieldsHTML = Array.from({ length: numberOfFields }, () => {
  const style = `width: ${fieldWidth}; height: ${fieldHeight}`;
  const classes = ["a", "b", "c", "d"]
    .filter(() => Math.random() < 0.25)
    .join(" ");
  return `
    <div class="field ${classes}" style="${style}">
      <div class="front"></div>
      <div class="back"></div>
    </div>
  `;
}).join("");

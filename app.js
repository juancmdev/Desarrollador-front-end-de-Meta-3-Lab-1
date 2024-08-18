// Task 1: Build a function-based console log message generator
const estilo = document.querySelector(".estilo");

function consoleStyler(color, background, fontSize, txt) {
  let message = "%c" + txt;
  let style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize}`;

  console.log(message, style);
  return message;
}

const styles = consoleStyler("white", "blue", "45px", "¡Hola, mundo!");

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  let fontStyle = "color: tomato; font-size: 50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(message, style);
  }
}

celebrateStyler("birthday");

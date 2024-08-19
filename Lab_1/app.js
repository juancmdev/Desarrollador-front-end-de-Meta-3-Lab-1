/********************************** */

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  const message = "%c" + txt;

  let style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;

  console.log(message, style);
}

// Task 2: Build a celebratory function
function celebrateStyler(reason) {
  const fontStyle = "color: tomato; font-size: 50px";

  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(`%c${reason}`, fontStyle);
  }
}

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

// Task 4: Invoke the new function
styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "birthday");

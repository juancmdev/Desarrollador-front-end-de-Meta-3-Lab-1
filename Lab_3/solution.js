/*
Task: Iterate Over an Array
In this exercise, you'll use the for....of loop to iterate over an array and to iterate over an object's own properties.
Step 1. You are given an array of dairy products:

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

Create a function called logDairy. Within it, console log each of the items in the dairy array, using the for...of loop.
The expected output should be:

cheese
sour cream
milk
yogurt
ice cream
milkshake
*/

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (dai of dairy) {
    console.log(dai);
  }
}

logDairy();

/*
Step 2. You are given the following starter code:
const animal = {
canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
Create a function called birdCan, within it, loop over the bird object's properties and console log each one, using the for...of loop. Remember, you need to console log both the key and the value of each of the bird object's properties.
*/

function birdCan() {
  const animal = {
    canJump: true,
  };

  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;

  //console.log(animal);

  for (brd of Object.keys(bird)) {
    console.log(brd + ": ", bird[brd]);
  }
}

birdCan();

/*
Step 3. Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop.
Final Step: Let's submit your code!*/

function animalCan() {
  const animal = {
    canJump: true,
  };

  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;

  for (prop in bird) {
    console.log(prop);
  }
}

animalCan();

/*
Nice work! To complete this assessment:

    Save your file through File -> Save
    Select "Submit Assignment" in your Lab toolbar.

Your code will be autograded and return feedback shortly on the "Grades" tab.
You can also see your score in your Programming Assignment "My Submission" tab.

*/

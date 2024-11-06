const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Store long string in story text
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
// Store groups of strings in three different arrays
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen","Disneyland","the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {
    // Store story text in new story variable
    let newStory = storyText;
    // store randomly chosen item in each string array in separate variables
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    // two instace of insert x - use replace all
    // replace text place holders with random items from string arrays
    newStory = newStory.replaceAll(":insertx:",xItem)
        .replace(":inserty:",yItem).replace(":insertz:",zItem);


  if(customName.value !== '') {
    const name = customName.value;
    // Replace Bob with the user entered name
    newStory = newStory.replace("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    // Add calculations to convert farenheit to centigrade and pounds to stone
    // Concat new measurement style on end
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94 - 32) * (5/9)) + " centigrade";
    // if uk radio button is selected replace measurements in story
    newStory = newStory.replace("94 fahrenheit",temperature).replace("300 pounds",weight);
  }

  // Fill the empty p tage with the generated story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}


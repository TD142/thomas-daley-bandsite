let comments = [
  {
    name: "Connor Walton",
    time: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    time: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    time: "01/09/2021",
    text: " I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

let contentEl = document.querySelector(".comments");

// for (let i = 0; i < comments.length; i++) {

//   displayComemnt(comments[i])

// create a div

//append these p tags to the div

for (let i = 0; i < comments.length; i++) {
  let itemDiv = document.createElement("div");
  itemDiv.classList.add("comments__container");
  contentEl.appendChild(itemDiv);
  let image = document.createElement("img");
  image.classList.add("comments__image");
  itemDiv.appendChild(image);

  let itemOuterDiv = document.createElement("div");
  itemDiv.appendChild(itemOuterDiv);

  let itemInnerDiv = document.createElement("div");
  itemInnerDiv.classList.add("comments__wrapper");
  itemOuterDiv.appendChild(itemInnerDiv);

  let itemComment1 = document.createElement("p");
  itemComment1.classList.add("comments__text");
  itemComment1.innerText = comments[i].name;
  itemInnerDiv.appendChild(itemComment1);

  let itemComment2 = document.createElement("p");
  itemComment2.classList.add("comments__item");
  itemComment2.innerText = comments[i].time;
  itemInnerDiv.appendChild(itemComment2);

  let itemComment3 = document.createElement("p");
  itemComment3.innerText = comments[i].text;
  itemOuterDiv.appendChild(itemComment3);

  //return the div
  // reutrn
}

// Runs three times, in the loop, to build each of the comment blocks
// let displayComment = (comment) => {
// builds the dynamic HTML
// };

// Runs once, on page load (must invoke it after) - NOTE: Could avoid using this, and just loop outside the function
// let renderComments = (comment) => {
// loops over the comments array, and calls displayComment() on each
// };

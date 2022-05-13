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

let displayComments = (comment) => {
  let itemDiv = document.createElement("article");
  itemDiv.classList.add("comments__container");
  contentEl.appendChild(itemDiv);

  let image = document.createElement("div");
  image.classList.add("comments__image");
  itemDiv.appendChild(image);

  let itemOuterDiv = document.createElement("div");
  itemDiv.appendChild(itemOuterDiv);

  let itemInnerDiv = document.createElement("div");
  itemInnerDiv.classList.add("comments__wrapper");
  itemOuterDiv.appendChild(itemInnerDiv);

  let itemComment1 = document.createElement("p");
  itemComment1.classList.add("comments__text");
  itemComment1.innerText = comment.name;
  itemInnerDiv.appendChild(itemComment1);

  let itemComment2 = document.createElement("p");
  itemComment2.classList.add("comments__item");
  itemComment2.innerText = comment.time;
  itemInnerDiv.appendChild(itemComment2);

  let itemComment3 = document.createElement("p");
  itemComment3.innerText = comment.text;
  itemOuterDiv.appendChild(itemComment3);
};

let contentEl = document.querySelector(".comments");

for (let i = 0; i < comments.length; i++) {
  displayComments(comments[i]);
}

let submitForm = (event) => {
  event.preventDefault();

  let submitData = {
    name: event.target.addName.value,
    date: event.target.addComment.value,
  };

  comments.push(submitData);

  displayComments();
};

let form = document.getElementById("form");
form.addEventListener("submit", submitForm);

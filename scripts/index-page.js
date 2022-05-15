const comments = [
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
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const displayComments = (comment) => {
  const itemDiv = document.createElement("article");
  itemDiv.classList.add("comments__container");
  contentEl.appendChild(itemDiv);

  const image = document.createElement("div");
  image.classList.add("comments__image");
  itemDiv.appendChild(image);

  const itemOuterDiv = document.createElement("div");
  itemOuterDiv.classList.add("comments__outer-wrapper");
  itemDiv.appendChild(itemOuterDiv);

  const itemInnerDiv = document.createElement("div");
  itemInnerDiv.classList.add("comments__wrapper");
  itemOuterDiv.appendChild(itemInnerDiv);

  const commentsText = document.createElement("p");
  commentsText.classList.add("comments__text");
  commentsText.innerText = comment.name;
  itemInnerDiv.appendChild(commentsText);

  const commentsItem = document.createElement("p");
  commentsItem.classList.add("comments__item");
  commentsItem.innerText = comment.time;
  itemInnerDiv.appendChild(commentsItem);

  const commentsSecondText = document.createElement("p");
  commentsSecondText.classList.add("comments__secondary-text");
  commentsSecondText.innerText = comment.text;
  itemOuterDiv.appendChild(commentsSecondText);
};

const contentEl = document.querySelector(".comments"); // TODO: use id

const renderComments = () => {
  for (let i = 0; i < comments.length; i++) {
    displayComments(comments[i]);
  }
};

const submitForm = (event) => {
  event.preventDefault();

  contentEl.innerText = "";

  const dateToday = new Date().toLocaleString().split(",")[0];

  const submitData = {
    name: event.target.addName.value,
    text: event.target.addComment.value,
    time: dateToday,
  };

  comments.unshift(submitData);

  const clearName = (addName.value = "");
  const clearComment = (addComment.value = "");

  renderComments();
};

console.log(comments);

renderComments();

const form = document.getElementById("form");
form.addEventListener("submit", submitForm);

const click = document.querySelector(".form__input");
click.addEventListener("click", () => {
  click.style.outlinecolor = "black";
});

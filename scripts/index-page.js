const API_URL = "https://project-1-api.herokuapp.com";
const KEY = "?api_key=f85dd6f7-d241-445c-9f2d-ee865a871db5";

const FULL_URL = `${API_URL}/comments${KEY}`;

// ** Function to retrieve the api response and looping over creating required dom elements/classes.

const displayComments = () => {
  axios.get(`${API_URL}/comments${KEY}`).then((response) => {
    const commentsResponse = response.data;

    commentsResponse.reverse().forEach((comment) => {
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

      const time = comment.timestamp;
      const timeStamp = new Date(time).toLocaleString().split(",")[0];

      const commentsItem = document.createElement("p");
      commentsItem.classList.add("comments__item");
      commentsItem.innerText = timeStamp;

      itemInnerDiv.appendChild(commentsItem);

      const commentsSecondText = document.createElement("p");
      commentsSecondText.classList.add("comments__secondary-text");
      commentsSecondText.innerText = comment.comment;
      itemOuterDiv.appendChild(commentsSecondText);
    });
  });
};

displayComments();

// ** Event handler to post new comment on submit, adding to the API.

const contentEl = document.querySelector(".comments");

const submitForm = (event) => {
  event.preventDefault();

  contentEl.innerText = "";

  const submitData = {
    name: event.target.addName.value,
    comment: event.target.addComment.value,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(`${API_URL}/comments${KEY}`, submitData, config)
    .then((response) => {
      displayComments();
    });

  const clearName = (addName.value = "");
  const clearComment = (addComment.value = "");
};

const form = document.getElementById("form");
form.addEventListener("submit", submitForm);

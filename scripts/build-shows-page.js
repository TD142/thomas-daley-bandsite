const shows = [
  {
    DATE: "Mon Sept 06 2021",
    VENUE: "Ronald Lane",
    LOCATION: "San Francisco CA CA",
  },
  {
    DATE: "Tue Sept 21 2021",
    VENUE: "Pier 3 East",
    LOCATION: "San Francisco CA",
  },
  {
    DATE: "Fri Oct 15 2021",
    VENUE: "View Lounge",
    LOCATION: "San Francisco CA",
  },
  {
    DATE: "Sat Nov 06 2021",
    VENUE: "Hyatt Agency",
    LOCATION: "San Francisco CA",
  },
  {
    DATE: "Fri Nov 26 2021",
    VENUE: "Moscow Center",
    LOCATION: "San Francisco CA",

    DATE: "Wed Dec 15 2021",
    VENUE: "Press Club",
    LOCATION: "San Francisco CA",
  },
];

// console.log(Object.keys(shows[0]()));

const displayDates = (show) => {
  const mainArticle = document.createElement("article");
  mainEl.appendChild(mainArticle);
  const header1 = document.createElement("p");
  mainArticle.appendChild(header1);
  header1.innerText = "DATE";
  header1.classList.add("shows__subtitle");

  const date = document.createElement("p");
  date.innerText = show.DATE;
  mainArticle.appendChild(date);

  const header2 = document.createElement("p");
  mainArticle.appendChild(header2);
  header2.innerText = "VENUE";
  header2.classList.add("shows__subtitle");

  const venue = document.createElement("p");
  venue.innerText = show.VENUE;
  mainArticle.appendChild(venue);

  const header3 = document.createElement("p");
  mainArticle.appendChild(header3);
  header3.innerText = "LOCATION";
  header3.classList.add("shows__subtitle");

  const location = document.createElement("p");
  location.innerText = show.LOCATION;
  mainArticle.appendChild(location);

  const submit = document.createElement("button");
  submit.innerText = "BUY TICKETS";
  mainArticle.appendChild(submit);

  // const date = document.createElement("p");
  // date.innerText = show.DATE;
  // mainArticle.appendChild(date);

  // mainArticle.innerText = show.DATE;
};

//   let displayComments = (comment) => {
//     let itemDiv = document.createElement("article");
//     itemDiv.classList.add("comments__container");
//     contentEl.appendChild(itemDiv);

//     let image = document.createElement("div");
//     image.classList.add("comments__image");
//     itemDiv.appendChild(image);

//     let itemOuterDiv = document.createElement("div");
//     itemDiv.appendChild(itemOuterDiv);

//     let itemInnerDiv = document.createElement("div");
//     itemInnerDiv.classList.add("comments__wrapper");
//     itemOuterDiv.appendChild(itemInnerDiv);

//     let itemComment1 = document.createElement("p");
//     itemComment1.classList.add("comments__text");
//     itemComment1.innerText = comment.name;
//     itemInnerDiv.appendChild(itemComment1);

//     let itemComment2 = document.createElement("p");
//     itemComment2.classList.add("comments__item");
//     itemComment2.innerText = comment.time;
//     itemInnerDiv.appendChild(itemComment2);

//     let itemComment3 = document.createElement("p");
//     itemComment3.innerText = comment.text;
//     itemOuterDiv.appendChild(itemComment3);
//   };

//   let contentEl = document.querySelector(".comments");

//   for (let i = 0; i < comments.length; i++) {
//     displayComments(comments[i]);
//   }

const mainEl = document.querySelector(".shows");

for (let i = 0; i < shows.length; i++) {
  displayDates(shows[i]);
}

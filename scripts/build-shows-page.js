const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco CA CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco CA",
  },
];

const mainEl = document.querySelector(".shows");

const sectionWrapper = document.createElement("div");
sectionWrapper.classList.add("shows__wrapper");
mainEl.appendChild(sectionWrapper);
const sectionHeader = document.createElement("h2");
sectionHeader.innerText = "shows";
sectionHeader.classList.add("shows__header");
sectionWrapper.appendChild(sectionHeader);

const showsContainer = document.createElement("div");
showsContainer.classList.add("shows__container");
mainEl.appendChild(showsContainer);

const innerWrapper = document.createElement("div");
innerWrapper.classList.add("shows__secondary-wrapper");
showsContainer.appendChild(innerWrapper);

const sectionHeader1 = document.createElement("p");
sectionHeader1.innerText = "date".toUpperCase();
innerWrapper.appendChild(sectionHeader1);

const sectionHeader2 = document.createElement("p");
sectionHeader2.innerText = "venue".toUpperCase();
innerWrapper.appendChild(sectionHeader2);

sectionHeader3 = document.createElement("p");
sectionHeader3.innerText = "location".toUpperCase();
innerWrapper.appendChild(sectionHeader3);

// const sectionHeader2 = document.createElement("p");
// const sectionHeader3 = document.createElement("p");

const displayDates = (show) => {
  const mainArticle = document.createElement("article");
  mainArticle.classList.add("shows__container");
  showsContainer.appendChild(mainArticle);

  const header1 = document.createElement("p");
  mainArticle.appendChild(header1);
  header1.innerText = "date".toUpperCase();
  header1.classList.add("shows__subtitle");

  const date = document.createElement("p");
  date.innerText = show.date;
  mainArticle.appendChild(date);

  const header2 = document.createElement("p");
  mainArticle.appendChild(header2);
  header2.innerText = "venue".toUpperCase();
  header2.classList.add("shows__subtitle");

  const venue = document.createElement("p");
  venue.innerText = show.venue;
  mainArticle.appendChild(venue);

  const header3 = document.createElement("p");
  mainArticle.appendChild(header3);
  header3.innerText = "location".toUpperCase();
  header3.classList.add("shows__subtitle");

  const location = document.createElement("p");
  location.innerText = show.location;
  mainArticle.appendChild(location);

  const submit = document.createElement("button");
  submit.innerText = "BUY TICKETS";
  mainArticle.appendChild(submit);

  // const date = document.createElement("p");
  // date.innerText = show.date;
  // mainArticle.appendChild(date);

  // mainArticle.innerText = show.date;
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

// const mainEl = document.querySelector(".shows");

for (let i = 0; i < shows.length; i++) {
  displayDates(shows[i]);
}

// how to put time and date in submit, event handler not working, how to access single key in loop.

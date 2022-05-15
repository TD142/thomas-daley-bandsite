const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const mainEl = document.querySelector(".shows");

const sectionWrapper = document.createElement("div");
sectionWrapper.classList.add("shows__wrapper");
mainEl.appendChild(sectionWrapper);
const sectionHeader = document.createElement("h2");
sectionHeader.innerText = "Shows";
sectionHeader.classList.add("shows__header");
sectionHeader.setAttribute("id", "shows");
sectionWrapper.appendChild(sectionHeader);

const showsContainer = document.createElement("div");
showsContainer.classList.add("shows__container");
mainEl.appendChild(showsContainer);

const innerWrapper = document.createElement("div");
innerWrapper.classList.add("shows__secondary-wrapper");
showsContainer.appendChild(innerWrapper);

const sectionHeader1 = document.createElement("p");
sectionHeader1.innerText = "date".toUpperCase();
sectionHeader1.classList.add("shows__secondary-subtitle");

innerWrapper.appendChild(sectionHeader1);

const sectionHeader2 = document.createElement("p");
sectionHeader2.innerText = "venue".toUpperCase();
sectionHeader2.classList.add("shows__secondary-subtitle");

innerWrapper.appendChild(sectionHeader2);

sectionHeader3 = document.createElement("p");
sectionHeader3.innerText = "location".toUpperCase();
sectionHeader3.classList.add("shows__secondary-subtitle");
sectionHeader3.classList.add("shows__secondary-subtitle--margin");

innerWrapper.appendChild(sectionHeader3);

const displayDates = (show) => {
  const outerContainer = document.createElement("div");
  outerContainer.classList.add("shows__outer-container");
  showsContainer.appendChild(outerContainer);

  const innerContainer = document.createElement("article");
  innerContainer.classList.add("shows__inner-container");
  outerContainer.appendChild(innerContainer);

  const header1 = document.createElement("p");
  innerContainer.appendChild(header1);
  header1.innerText = "date".toUpperCase();
  header1.classList.add("shows__subtitle");

  const date = document.createElement("p");
  date.classList.add("shows__inner-subtitle");
  date.innerText = show.date;
  innerContainer.appendChild(date);

  const header2 = document.createElement("p");
  innerContainer.appendChild(header2);
  header2.innerText = "venue".toUpperCase();
  header2.classList.add("shows__subtitle");

  const venue = document.createElement("p");
  venue.innerText = show.venue;
  venue.classList.add("shows__text");
  innerContainer.appendChild(venue);

  const header3 = document.createElement("p");
  innerContainer.appendChild(header3);
  header3.innerText = "location".toUpperCase();
  header3.classList.add("shows__subtitle");

  const location = document.createElement("p");
  location.innerText = show.location;
  location.classList.add("shows__text");
  location.classList.add("shows__text--margin");
  innerContainer.appendChild(location);

  const submit = document.createElement("button");
  submit.innerText = "BUY TICKETS";
  submit.classList.add("shows__button");
  innerContainer.appendChild(submit);
};

for (let i = 0; i < shows.length; i++) {
  displayDates(shows[i]);
}

//**-- the plan for below was to change the background of everything that's not clicked. However i could not figure out how to get nth child or type to work on the button.

// const showsSelected = document.querySelectorAll(".shows__button");
// showsSelected.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     const containerClick = document
//       .querySelector(".shows__outer-container:nth-child(2)")
//       .classList.add("shows__outer-container--highlight");

//     const containerClick1 = document
//       .querySelector(".shows__outer-container:nth-child(1)")
//       .classList.add("shows__outer-container--unactive");

//     const containerClick2 = document
//       .querySelector(".shows__outer-container:nth-child(4)")
//       .classList.add("shows__outer-container--unactive");

//     const containerClick3 = document
//       .querySelector(".shows__outer-container:nth-child(5)")
//       .classList.add("shows__outer-container--unactive");

//     const containerClick4 = document
//       .querySelector(".shows__outer-container:nth-child(6)")
//       .classList.add("shows__outer-container--unactive");

//     const containerClick6 = document
//       .querySelector(".shows__outer-container:nth-child(7)")
//       .classList.add("shows__outer-container--unactive");
//   });
// });

// const showsSelectedSecond = document.querySelector(
//   ".shows__button:nth-of-type(3)"
// );
// showsSelectedSecond.addEventListener("click", (e) => {
//   const secondcontainerClick = document
//     .querySelector(".shows__outer-container:nth-child(2)")
//     .classList.add("shows__outer-container--highlight");

//   const secondcontainerClick1 = document
//     .querySelector(".shows__outer-container:nth-child(3)")
//     .classList.add("shows__outer-container--unactive");

//   const secondcontainerClick2 = document
//     .querySelector(".shows__outer-container:nth-child(4)")
//     .classList.add("shows__outer-container--unactive");

//   const secondcontainerClick3 = document
//     .querySelector(".shows__outer-container:nth-child(5)")
//     .classList.add("shows__outer-container--unactive");

//   const secondcontainerClick4 = document
//     .querySelector(".shows__outer-container:nth-child(6)")
//     .classList.add("shows__outer-container--unactive");

//   const secondcontainerClick6 = document
//     .querySelector(".shows__outer-container:nth-child(7)")
//     .classList.add("shows__outer-container--unactive");
// });

// const click = document.querySelector(".form__input");
// click.addEventListener("click", () => {
//   click.style.outlinecolor = "black";
// });

// const showsSelected = document.querySelectorAll(".shows__button");
// showsSelected.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     const containerClick = document.querySelectorAll(".shows__outer-container");
//     containerClick.forEach((item) => {
//       item.style.background = "black";
//     });
//   });
// });

// const click = document.querySelector(".form__input");
// click.addEventListener("click", () => {
//   click.style.outlinecolor = "black";
// });

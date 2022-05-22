const API_URL = "https://project-1-api.herokuapp.com";
const KEY = "?api_key=f85dd6f7-d241-445c-9f2d-ee865a871db5";

// ** Function to render DOM creating required elements/classes.
const showsRender = () => {
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

  // event handler removing class from all items and then adding class to target item to change focus state.

  function handleShowRowClick() {
    const listElements = document.querySelectorAll(".shows__outer-container");

    listElements.forEach((item) => {
      item.addEventListener("click", () => {
        listElements.forEach((item) => {
          item.classList.remove("shows__outer-container--highlight");
        });

        item.classList.add("shows__outer-container--highlight");
      });
    });
  }

  // Retrieves API response, loops over and creates DOM elements for each iteration, as well as displaying the response with inner text.

  const dates = () => {
    axios.get(`${API_URL}/showdates${KEY}`).then((response) => {
      const datesResponse = response.data;

      datesResponse.forEach((show) => {
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

        const dates = parseInt(show.date);
        const showDates = new Date(dates)
          .toUTCString()
          .split(" ")
          .slice(0, 4)
          .join(" ");
        console.log(showDates);

        const date = document.createElement("p");
        date.classList.add("shows__inner-subtitle");
        date.innerText = showDates;
        innerContainer.appendChild(date);

        const header2 = document.createElement("p");
        innerContainer.appendChild(header2);
        header2.innerText = "venue".toUpperCase();
        header2.classList.add("shows__subtitle");

        const venue = document.createElement("p");
        venue.innerText = show.place;
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
      });

      handleShowRowClick();
    });
  };

  dates();
};

showsRender();

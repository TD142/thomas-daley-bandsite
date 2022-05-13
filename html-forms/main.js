/**
 * An array of objects (the default set of bookings)
 */
const bookings = [
  {
    name: "Sammy",
    date: "2022-05-12",
  },
  {
    name: "Charlie",
    date: "2022-05-13",
  },
];

/**
 * Render the bookings on the page
 */
const renderBookings = () => {
  // Get the booking-list div
  const bookingList = document.getElementById("booking-list");

  // Clear out the bookingsList to prevent duplicates
  bookingList.innerHTML = "";

  // Loop over the array of objects, create the HTML, and append it to the bookings list
  for (let i = 0; i < bookings.length; i++) {
    // Call the createBookingCard() function, pass it the individual booking object
    // for the current loop (bookings[i]), and store the result in a variable
    const bookingCard = createBookingCard(bookings[i]);

    // Append the wrapping div to the page
    bookingList.appendChild(bookingCard);
  }
};

/**
 * Build the dynamic HTML, for a booking boject
 *
 * bookingObject param is the indiviaul booking object, in the loop above
 */
const createBookingCard = (bookingObject) => {
  // Create a div to wrap the content
  const card = document.createElement("article");
  card.classList.add("booking-list__booking");

  // Create a heading tag
  const heading = document.createElement("h3");
  heading.classList.add("booking-list__heading");
  heading.innerHTML = bookingObject.name; // Add the value associated with the name key inside the heading
  card.appendChild(heading); // Add the heading to the card

  // Create a p tag for the date
  const date = document.createElement("p");
  date.classList.add("booking-list__date");
  date.innerHTML = bookingObject.date;
  card.appendChild(date);

  // Return the final card, so I can grab it in a variable above
  return card;
};

renderBookings();

/**
 * Handle the form submit event, to validate, and add the
 * data to the bookings array
 */
const handleFormSubmit = (event) => {
  event.preventDefault();

  // Validate that the terms checkbox has been checked
  if (event.target.terms.checked === false) {
    alert("Please agree to the terms");
    return; // Stop execution of the script, don't proceed
  }

  const formData = {
    name: event.target.fullName.value,
    date: event.target.date.value,
    // Todo: Add other form inputs
  };

  // Add the new object to the array of bookings
  bookings.push(formData);

  // Re-render the entire array, including the new one
  renderBookings();
};

// Get the form element
const form = document.getElementById("booking-form");

// Add an event listener to the form to handle the submit event
form.addEventListener("submit", handleFormSubmit);

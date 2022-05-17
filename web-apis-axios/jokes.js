/**
 * An example of using Axios and DOM manipulation to
 * display the data on the page
 */

// The base API URL
const JOKES_API_URL = "https://developerjokes.herokuapp.com";

// Get the elements we need to interact with
const jokesList = document.getElementById("jokesList");
const jokeForm = document.getElementById("jokeForm");

/**
 * Get joke data from API, and add to page
 */
const getJokes = () => {
  // Do a GET request to the /jokes endpoint
  axios.get(`${JOKES_API_URL}/jokes`).then((response) => {
    // Get the data from the response
    const jokes = response.data;

    // Clear out any existing data (to avoid duplication)
    jokesList.innerHTML = "";

    // Loop over the data we recieved
    jokes.forEach((joke) => {
      // Create a containing <li>
      const listItem = document.createElement("li");

      // Crete a <p> and set its contents to the joke's question from the data
      const questionParagraph = document.createElement("p");
      questionParagraph.innerHTML = joke.question;
      listItem.appendChild(questionParagraph);

      // Crete a <p> and set its contents to the joke's answer from the data
      const answerParagraph = document.createElement("p");
      answerParagraph.innerHTML = joke.answer;
      listItem.appendChild(answerParagraph);

      // Add the <li> to the page
      jokesList.appendChild(listItem);
    });
  });
};

// Call the function to get the jokes on page load
getJokes();

/**
 * Submit the joke form, and send a POST request
 * to the API to store the joke
 */
const handleJokeFormSubmit = (event) => {
  event.preventDefault();

  // Get the form values, and store it in a new object
  const newJoke = {
    question: event.target.question.value,
    answer: event.target.answer.value,
  };

  // Send a POST request to the api, adding an API key as a
  // query parameter (i.e. after the question mark), and the new
  // joke data as the second argument
  axios
    .post(`${JOKES_API_URL}/jokes?api_key=neocat`, newJoke)
    .then((response) => {
      console.log(response);
      getJokes(); // Now that the joke has been saved in the API, get the latest list of joke data
    })
    .catch((error) => {
      console.log(error);
    });
};

// Add the form submit event handler function to the submit event
jokeForm.addEventListener("submit", handleJokeFormSubmit);

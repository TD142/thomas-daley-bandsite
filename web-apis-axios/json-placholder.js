/**
 * An example of using Axios to make GET and
 */

// The JSON Placeholder Base API
const API_URL = "https://jsonplaceholder.typicode.com";

// Use axios to do a GET request. Axios returns a promoise,
// so we chain .then() to wait for it to finish, then console.log
axios
  .get(`${API_URL}/posts`)
  .then((response) => {
    console.log(response);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

// Use axios to do a GET request on a single post
axios
  .get(`${API_URL}/posts/34`)
  .then((response) => {
    console.log(response);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

// Use axios to do a POST request, supplying some data along with it
let data = axios
  .post(`${API_URL}/posts`, {
    name: "Sammy",
    email: "sabukmeil@brainstation.io",
    phone: "07777777777",
  })
  .then((response) => {
    console.log(response);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

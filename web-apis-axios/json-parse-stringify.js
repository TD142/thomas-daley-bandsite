/**
 * How to use the javascript JSON object to convert
 * to and from Javascript Objects and JSON
 */

// An array of objects for the educator team
const team = [
  { name: "Sammy", role: "Educator" },
  { name: "Joe", role: "Educator" },
  { name: "Mariia", role: "Teaching Assistant" },
];

console.log(team);

// Convert array of objects to JSON (i.e. stringify it)
const teamJson = JSON.stringify(team);

console.log(teamJson);

// Convert a JSON string to an array of objects (i.e. parse it)
const teamParsed = JSON.parse(teamJson);

console.log(teamParsed);

//how to access the external js file or to import to another file.
// it will help in linking pages.

// const a = require('./people');
const {people,ages} = require('./people');
console.log(people,ages);

// console.log(a.people,a.ages);

const os = require('os');
console.log(os.platform(),os.homedir());

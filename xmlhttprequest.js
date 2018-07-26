// Using an XMLHttpRequest - OLD SCHOOL

// You were amending code copied from a StackOverflow post when we ran out of time
// BUT!
// the fetch API is the new and shiny way of making REST API calls so to move forward
// take a look at the fetch-api.js file.

// To give a close to the code from yesterday, here's a working GET example that I hope
// is recognisable when you compare.

function getData() {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  request.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
  request.send();
}

getData();

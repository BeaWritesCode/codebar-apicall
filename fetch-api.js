// Using fetch API with promises, invoked using an iife
// so the code doesn't pollute the global scope.

// Next steps might be:
// - add credentials to request
// - add PUT, POST
// - factor out the success and error functions
// - handle returned http status codes
// - convert to async / await (best to understand promises first)
// - polyfill older browsers, if supported (https://caniuse.com/#search=fetch)

(function fetchData() {
  console.log('fetching data!');

  const url = 'https://jsonplaceholder.typicode.com/users/1';

  return fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.group('success!');
      console.log(data);
      console.groupEnd();

      return data; // always return - avoid runaway promises!
    })
    .catch(error => console.error('Error:', error));
})();

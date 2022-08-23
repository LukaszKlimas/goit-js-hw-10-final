export const dupa="wielka";
export function fetchCountries(name){
//let name="peru";
fetch(`https://restcountries.com/v2/name/${name}`)
//fetch(`https://restcountries.com/v3.1/${name}?fields=name.official,capital,population,flags.svg,languages`)
.then(response => {
    // Response handling
    console.log("A",response.json());
    console.log("B",response);
    return response.json();
  })
  .then(data => {
    // Data handling
    print(data.json);
  })
  .catch(error => {
    // Error handling
  });

//GET https://restcountries.com/v3.1/name/peru
//Accept: application/json
}
export function sayHi(user) {
    alert(`Hello, ${user}!`);
    } 
export function allCountries(){
    fetch(`https://restcountries.com/v2/all?fields=name,capital,population,flags.svg,languages`)
.then(response => {
    // Response handling
    console.log("A",response.json());
    return response.json();
  })
  .then(data => {
    // Data handling
    print(data.json);
  })
  .catch(error => {
    // Error handling
  });
}
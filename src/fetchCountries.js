export function fetchCountries(name){
//let name="peru"; 
return fetch(
  `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
//fetch(`https://restcountries.com/v3.1/${name}?fields=name.official,capital,population,flags.svg,languages`)
.then(response => {
    // Response handling
    console.log("Wczytano");
    //console.log("A",response.json());
    //console.log("B",response);
    return response.json();
  })
  //.then(data => {
    // Data handling
    //print(data.json);
 // })
  .catch(error => {
    // Error handling
  });

//GET https://restcountries.com/v3.1/name/peru
//Accept: application/json
}
export function sayHi(user) {
    alert(`Hello, ${user}!`);
    } 
    const allCountriesTab=[];
export function allCountries(){
    fetch(`https://restcountries.com/v2/all?fields=name,capital,population,flags.svg,languages`)
.then(response => {
    // Response handling
    const odp2= response.json();
    const odp=parse();
    console.log("b", odp);
    console.log("c", odp[0]);
    console.log("d",Object.keys(odp));
    //return JSON.parse(odp);
  })
  .then(data => {
    // Data handling
    console.log(data.json);
  })
  .catch(error => {
    // Error handling
    console.log(error.json);
  });
}
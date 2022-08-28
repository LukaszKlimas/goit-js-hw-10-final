const _ = require('lodash');
import './css/styles.css';
import {fetchCountries,allCountries} from './fetchCountries.js';
import {sayHi} from './fetchCountries.js';
import Notiflix from'notiflix';
const DEBOUNCE_DELAY = 300;
//var debounce = require('lodash.debounce');
// let a="cc";
//  a=fetchCountries("Peru");
// console.log("C",a);

//const tab= allCountries();
//console.log(tab);

const input=document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector('.country-info');
// input.addEventListener("input", (event) => {
//     output.textContent = event.currentTarget.value;
//   });

input.addEventListener(
  "input",
  _.debounce(e => {
    //console.log(e.target.value.trim());
    fetchCountries(e.target.value.trim())
    .then(countries => renderCountryOne(countries))
    .catch(error => {
      if (e.target.value.trim() !== '') {
        console.log(error)
        Notiflix.Notify.failure('Oops, there is no country with that name');
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return
      }
    })
}, 300)
);

function renderCountryOne(countries) {
  if (countries.length < 1) {
      countryList.innerHTML = '';
      countryInfo.innerHTML = ''
    }
    else if (countries.length > 10) {
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
    } else if (countries.length > 1 && countries.length < 10) {
      countryInfo.innerHTML = '';
      const markup = countries
        .map(({ name, flags }) => {
          return `<div class = name>
        <img class="flag" src="${flags.svg}" alt="Flag of ${name.official}">
        <p> ${name.official}</p> </div> `;
        })
        .join('');
      countryList.innerHTML = markup;
     
    } else if (countries.length === 1) {
      const markup = countries
        .map(({ name, flags, capital, population, languages }) => {
          return `<div class = name>
        <img class="flag" src="${flags.svg}" alt="Flag of ${name.official}">
        <h1> ${name.official}</h1> </div>
            <p><b>Capital</b>: ${capital}</p>
            <p><b>Population</b>: ${population}</p>
            
             <p><b>Languages</b>: ${Object.values(languages).join(',')}</p>
          </li>`;
        })
        .join('');
      countryInfo.innerHTML = markup;
      countryList.innerHTML = '';
    } 
       
  }
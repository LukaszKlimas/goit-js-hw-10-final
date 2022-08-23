const _ = require('lodash');
import './css/styles.css';
import {fetchCountries,allCountries} from './fetchCountries.js';
import {sayHi} from './fetchCountries.js';
const DEBOUNCE_DELAY = 300;
//var debounce = require('lodash.debounce');


//sayHi("noob");
// let a="cc";
//  a=fetchCountries("Peru");
// console.log("C",a);

//allCountries();

const input=document.querySelector("#search-box");
const output = document.querySelector(".output");
// input.addEventListener("input", (event) => {
//     output.textContent = event.currentTarget.value;
//   });

 document.addEventListener(
  "input",
  _.debounce(() => {
    console.log("Scroll handler call after 300ms pause");
  }, 300)
);
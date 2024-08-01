/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const p = document.querySelector("#excuse");
  console.log(p);
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const result = `${who[Math.floor((who.length - 1) * Math.random())]}
    ${action[Math.floor((action.length - 1) * Math.random())]}
    ${what[Math.floor((what.length - 1) * Math.random())]}
    ${when[Math.floor((when.length - 1) * Math.random())]}`;
  p.innerHTML = result;
};

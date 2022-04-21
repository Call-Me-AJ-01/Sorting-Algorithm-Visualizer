"use strict";
import { bubbleSort } from "./Algorithms/Algorithms_for_frontend/BubbleSort.js";
import { insertionSort } from "./Algorithms/Algorithms_for_frontend/InsertionSort.js";
import { selectionSort } from "./Algorithms/Algorithms_for_frontend/SelectionSort.js";
import { quick_sort } from "./Algorithms/Algorithms_for_frontend/QuickSort.js";

const nav_bar = document.querySelector(".nav_bar");
const algo_btn = nav_bar.querySelectorAll("div")[0];
const algo_content = document.getElementsByClassName("algo-topic")[0];
const sort_btn = document.querySelector("#Sort");
const graph_container = document.querySelector(".bars");
const array_container = document.querySelector(".array");
const grap_input = document.querySelector("#graph_container");
const arr_input = document.querySelector("#array_container");
const new_value = document.querySelector("#new_values");
const menu = document.querySelector(".algo-topic");
const code_btn = document.querySelector(".see").querySelector("a");
const overlay_body = document.querySelector(".overlay");
const code_body = document.querySelector(".algorithm");
const pointer = document.querySelector(".pointer");

var algo_name = "Please Select Algorithm from the Algorithms Menu";

export { graph_container, array_container, sort_btn };

algo_btn.addEventListener("click", function () {
  algo_content.classList.toggle("hidden");
});

graph_input(grap_input.value);
array_input(arr_input.value);

// graph
function graph_input(value) {
  let height = 0;
  let width = 100 / (value * 1);
  graph_container.innerHTML = "";
  for (let index = 0; index < value; index++) {
    height = randomNumber(100, 580);
    graph_container.insertAdjacentHTML(
      "beforeend",
      `<div class ='bar' style='height:${height}px; width:${
        width - 0.5
      }%; background: rgb(211, 84, 211); margin-top:4px; margin-left:4px;'></div>`
    );
  }
}

grap_input.addEventListener("input", function () {
  sort_btn.disabled = false;
  sort_btn.style.opacity = 1;
  graph_input(grap_input.value);
});

// array
export function array_input(value) {
  array_container.innerHTML = "";
  for (let index = 0; index < value; index++) {
    array_container.insertAdjacentHTML(
      "beforeend",
      `<div class = 'box'><p style="padding-top: 25%;">${Math.trunc(
        randomNumber(1, 100)
      )}</p></div>`
    );
  }
}

arr_input.addEventListener("input", function () {
  sort_btn.disabled = false;
  sort_btn.style.opacity = 1;
  array_input(arr_input.value);
});

// To generate random values in given range
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// new_value Button
new_value.addEventListener("click", function () {
  sort_btn.disabled = false;
  sort_btn.style.opacity = 1;
  graph_input(grap_input.value);
  array_input(arr_input.value);
});

// hidding menu when clicked outside
window.addEventListener("click", function (event) {
  if (event.target !== algo_btn.querySelector("button")) {
    algo_content.classList.add("hidden");
  }
});

menu.addEventListener("click", function (event) {
  algo_name = event.target.textContent;
  if (algo_name !== "Please Select Algorithm from the Algorithms Menu") {
    new_value.click();
    sort_btn.textContent = algo_name + " !";
  }
});

code_btn.addEventListener("click", code_check);

function code_check() {
  fetch(`/Algorithms/Snippet/${algo_name.replaceAll(" ", "").slice(1)}.js`)
    .then((response) => response.text())
    .then((text) => {
      if (algo_name === "Please Select Algorithm from the Algorithms Menu") {
        text = "";
        nav_bar
          .querySelectorAll("div")[0]
          .querySelector("button").style.fontWeight = 900;
        nav_bar
          .querySelectorAll("div")[0]
          .querySelector("button").style.fontSize = "30px";
        nav_bar.classList.add("release_blur");
        pointer.classList.remove("hidden");
      }
      code_body.innerHTML = "";
      code_body.insertAdjacentHTML(
        "beforeend",
        `<pre id="program" style='margin:20px; font-size:20px; font-weight:400; line-height: 35px;'><h1 style='text-align:center; padding:20px; font-size:25px;'>${algo_name}</h1>${text}</pre>`
      );
      nav_bar.querySelectorAll("div")[1].classList.add("add_blur");
      nav_bar.querySelectorAll("div")[2].classList.add("add_blur");
      code_body.classList.remove("hidden");
      overlay_body.classList.remove("hidden");
      return;
    });
}

function remove_overlay() {
  nav_bar
    .querySelectorAll("div")[0]
    .querySelector("button").style.fontWeight = 100;
  nav_bar.querySelectorAll("div")[0].querySelector("button").style.fontSize =
    "23px";
  nav_bar.classList.remove("release_blur");
  code_body.classList.add("hidden");
  overlay_body.classList.add("hidden");
  pointer.classList.add("hidden");
  document
    .querySelector(".nav_bar")
    .querySelectorAll("div")[1]
    .classList.remove("add_blur");
  document
    .querySelector(".nav_bar")
    .querySelectorAll("div")[2]
    .classList.remove("add_blur");
}

overlay_body.addEventListener("click", remove_overlay);
nav_bar.addEventListener("click", remove_overlay);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    remove_overlay();
    algo_content.classList.add("hidden");
  }
});

// Action when sort button is clicked

function align() {
  const bars = array_container.querySelectorAll("div");
  for (let index = 0; index < bars.length; index++) {
    bars[index].textContent = bars[index].textContent;
    bars[index].style.paddingTop = "20px";
  }
}

sort_btn.addEventListener("click", function () {
  // new_value.click();
  align();
  if (algo_name.slice(1) === "Bubble Sort") {
    bubbleSort();
    bubbleSort(false);
  } else if (algo_name.slice(1) === "Insertion Sort") {
    insertionSort();
    insertionSort(false);
  } else if (algo_name.slice(1) === "Selection Sort") {
    selectionSort();
    selectionSort(false);
  } else if (algo_name.slice(1) === "Quick Sort") {
    quick_sort();
    quick_sort(false);
  } else if (algo_name.slice(1) === "Merge Sort") {
    merge_sort();
    // merge_sort(false);
  } else {
    code_check();
  }
});

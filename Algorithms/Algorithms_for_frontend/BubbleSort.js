import { graph_container, array_container, sort_btn } from "../../front-end.js";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(graph = true) {
  sort_btn.disabled = true;
  sort_btn.style.opacity = 0.5;
  var bars = "";
  if (graph) {
    bars = graph_container.querySelectorAll("div");
  } else {
    bars = array_container.querySelectorAll("div");
  }
  for (let index1 = 0; index1 < bars.length; index1++) {
    for (let index2 = 0; index2 < bars.length - index1 - 1; index2++) {
      bars[index2].style.background = "yellow";
      bars[index2 + 1].style.background = "yellow";
      await sleep(0.1);
      if (graph) {
        if (bars[index2].offsetHeight * 1 > bars[index2 + 1].offsetHeight * 1) {
          bars[index2].style.background = "green";
          bars[index2 + 1].style.background = "green";
          const temp = bars[index2].offsetHeight * 1;
          bars[index2].style.height = bars[index2 + 1].offsetHeight + "px";
          bars[index2 + 1].style.height = temp + "px";
          await sleep(0.1);
        }
      } else {
        if (bars[index2].textContent * 1 > bars[index2 + 1].textContent * 1) {
          bars[index2].style.background = "green";
          bars[index2 + 1].style.background = "green";
          const temp = bars[index2].textContent;
          bars[index2].textContent = bars[index2 + 1].textContent;
          bars[index2 + 1].textContent = temp;
          await sleep(0.1);
        }
        bars[index2].style.paddingTop = "20px";
        bars[index2 + 1].style.paddingTop = "20px";
      }
      bars[index2].style.background = "rgb(211, 84, 211)";
      bars[index2 + 1].style.background = "rgb(211, 84, 211)";
    }
    bars[bars.length - index1 - 1].style.background = "green";
  }
  for (let index1 = 0; index1 < bars.length; index1++) {
    bars[index1].style.background = "#CC8899";
  }
  if (graph) {
    sort_btn.disabled = false;
    sort_btn.style.opacity = 1;
  }
}

export { bubbleSort };

import { graph_container, array_container, sort_btn } from "../../front-end.js";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function insertionSort(graph = true) {
  sort_btn.disabled = true;
  sort_btn.style.opacity = 0.5;
  var bars = "";
  if (graph) {
    bars = graph_container.querySelectorAll("div");
  } else {
    bars = array_container.querySelectorAll("div");
  }
  if (graph) {
    for (let index1 = 1; index1 < bars.length; index1++) {
      let index2 = index1;
      while (index2 - 1 > -1) {
        bars[index2].style.background = "yellow";
        bars[index2 - 1].style.background = "yellow";
        await sleep(0.1);
        if (bars[index2].offsetHeight * 1 < bars[index2 - 1].offsetHeight * 1) {
          bars[index2].style.background = "green";
          bars[index2 - 1].style.background = "green";
          await sleep(0.1);
          const temp = bars[index2].offsetHeight * 1;
          bars[index2].style.height = bars[index2 - 1].offsetHeight + "px";
          bars[index2 - 1].style.height = temp + "px";
          bars[index2].style.background = "rgb(211, 84, 211)";
          bars[index2 - 1].style.background = "rgb(211, 84, 211)";
        } else {
          bars[index2].style.background = "rgb(211, 84, 211)";
          bars[index2 - 1].style.background = "rgb(211, 84, 211)";
          break;
        }
        await sleep(0.1);
        index2--;
      }
    }
  } else {
    for (let index1 = 1; index1 < bars.length; index1++) {
      let index2 = index1;
      while (index2 - 1 > -1) {
        bars[index2].style.background = "yellow";
        bars[index2 - 1].style.background = "yellow";
        bars[index2].textContent = bars[index2].textContent;
        bars[index2 - 1].textContent = bars[index2 - 1].textContent;
        await sleep(0.1);
        if (bars[index2].textContent * 1 < bars[index2 - 1].textContent * 1) {
          bars[index2].style.background = "green";
          bars[index2 - 1].style.background = "green";
          await sleep(0.1);
          const temp = bars[index2].textContent * 1;
          bars[index2].textContent = bars[index2 - 1].textContent;
          bars[index2 - 1].textContent = temp;
          bars[index2].style.background = "transparent";
          bars[index2 - 1].style.background = "transparent";
        } else {
          bars[index2].style.background = "transparent";
          bars[index2 - 1].style.background = "transparent";
          break;
        }
        bars[index2].style.paddingTop = "20px";
        bars[index2 - 1].style.paddingTop = "20px";
        await sleep(0.1);
        index2--;
      }
      bars[index1].style.paddingTop = "20px";
    }
  }
  for (let index1 = 0; index1 < bars.length; index1++) {
    bars[index1].style.background = "#CC8899";
    bars[index1].style.paddingTop = "20px";
  }
  if (graph) {
    sort_btn.disabled = false;
    sort_btn.style.opacity = 1;
  }
}

export { insertionSort };

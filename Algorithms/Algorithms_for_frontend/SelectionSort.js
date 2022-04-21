import { graph_container, array_container, sort_btn } from "../../front-end.js";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function selectionSort(graph = true) {
  sort_btn.disabled = true;
  sort_btn.style.opacity = 0.5;
  var bars = "";
  if (graph) {
    bars = graph_container.querySelectorAll("div");
  } else {
    bars = array_container.querySelectorAll("div");
  }
  for (let index1 = 0; index1 < bars.length; index1++) {
    let min = index1;
    for (let index2 = index1 + 1; index2 < bars.length; index2++) {
      bars[min].style.background = "yellow";
      bars[index2].style.background = "yellow";
      bars[index2].textContent = bars[index2].textContent;
      bars[min].textContent = bars[min].textContent;
      await sleep(0.1);
      if (graph) {
        bars[min].style.background = "rgb(211, 84, 211)";
        bars[index2].style.background = "rgb(211, 84, 211)";
      } else {
        bars[index2].style.background = "transparent";
        bars[min].style.background = "transparent";
      }
      if (graph) {
        if (bars[index2].offsetHeight * 1 < bars[min].offsetHeight * 1) {
          min = index2;
        }
      } else {
        bars[index2].style.paddingTop = "20px";
        bars[min].style.paddingTop = "20px";
        if (bars[index2].textContent * 1 < bars[min].textContent * 1) {
          min = index2;
        }
      }
    }
    if (min != index1) {
      if (graph) {
        await sleep(0.1);
        let temp = bars[index1].offsetHeight;
        bars[index1].style.height = bars[min].offsetHeight + "px";
        bars[min].style.height = temp + "px";
      } else {
        await sleep(0.1);
        const temp = bars[index1].textContent;
        bars[index1].textContent = bars[min].textContent;
        bars[min].textContent = temp;
      }
      await sleep(0.1);
    }
    bars[index1].style.background = "green";
  }
  for (let index1 = 0; index1 < bars.length; index1++) {
    bars[index1].style.background = "#CC8899";
  }
  if (graph) {
    sort_btn.disabled = false;
    sort_btn.style.opacity = 1;
  }
}

export { selectionSort };

import { graph_container, array_container, sort_btn } from "../../front-end.js";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function quick_sort(graph = true) {
  sort_btn.disabled = true;
  sort_btn.style.opacity = 0.5;
  var bars = "";
  if (graph) {
    bars = graph_container.querySelectorAll("div");
  } else {
    bars = array_container.querySelectorAll("div");
  }
  var array = new Array([0, bars.length - 1]);
  while (array.length > 0) {
    const [low, high] = array.shift();
    if (low > high) continue;
    let pivot_index = high;
    let first_index = low;
    bars[pivot_index].style.background = "orange";
    await sleep(0.1);
    for (let moving_index = low; moving_index < high; moving_index++) {
      bars[moving_index].style.background = "yellow";
      bars[first_index].style.background = "yellow";
      await sleep(0.1);
      if (graph) {
        bars[moving_index].style.background = "rgb(211, 84, 211)";
        bars[first_index].style.background = "rgb(211, 84, 211)";
      } else {
        bars[moving_index].style.background = "transparent";
        bars[first_index].style.background = "transparent";
      }
      if (graph) {
        if (
          bars[moving_index].offsetHeight * 1 <=
          bars[pivot_index].offsetHeight * 1
        ) {
          bars[moving_index].style.background = "red";
          bars[first_index].style.background = "red";
          const temp = bars[first_index].offsetHeight;
          bars[first_index].style.height =
            bars[moving_index].offsetHeight + "px";
          bars[moving_index].style.height = temp + "px";
          await sleep(0.1);
          bars[moving_index].style.background = "rgb(211, 84, 211)";
          bars[first_index].style.background = "rgb(211, 84, 211)";
          first_index++;
        }
      } else {
        if (
          bars[moving_index].textContent * 1 <=
          bars[pivot_index].textContent * 1
        ) {
          bars[moving_index].style.background = "red";
          bars[first_index].style.background = "red";
          const temp = bars[first_index].textContent;
          bars[first_index].textContent = bars[moving_index].textContent;
          bars[moving_index].textContent = temp;
          await sleep(0.1);
          bars[moving_index].style.background = "transparent";
          bars[first_index].style.background = "transparent";
          first_index++;
        }
      }
    }
    if (graph) {
      const temp = bars[first_index].offsetHeight * 1;
      bars[first_index].style.height = bars[high].offsetHeight * 1 + "px";
      bars[high].style.height = temp + "px";
    } else {
      const temp = bars[first_index].textContent;
      bars[first_index].textContent = bars[high].textContent;
      bars[high].textContent = temp;
    }
    bars[first_index].style.background = "green";
    array.push([low, first_index - 1]);
    array.push([first_index + 1, high]);
  }
  await sleep(0.1);
  for (let index1 = 0; index1 < bars.length; index1++) {
    bars[index1].style.background = "#CC8899";
  }
  if (graph) {
    sort_btn.disabled = false;
    sort_btn.style.opacity = 1;
  }
}

export { quick_sort };

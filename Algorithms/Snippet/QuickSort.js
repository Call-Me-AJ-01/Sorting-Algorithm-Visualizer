// Method - 1 (Using recursion)

var arr = new Array(1, 34, 2, 5, 23, 54, 12, 65, 32);

function quick_sort(low, high) {
  if (low > high) {
    return;
  }
  let pivot = partition(low, high);
  quick_sort(low, pivot - 1);
  quick_sort(pivot + 1, high);
}

function partition(low, high) {
  let pivot_index = high;
  let first_index = low;
  for (let moving_index = low; moving_index < high; moving_index++) {
    if (arr[moving_index] <= arr[pivot_index]) {
      const temp = arr[first_index];
      arr[first_index] = arr[moving_index];
      arr[moving_index] = temp;
      first_index++;
    }
  }
  const temp = arr[first_index];
  arr[first_index] = arr[high];
  arr[high] = temp;
  return first_index;
}

quick_sort(0, arr.length - 1);
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

// Method - 2 (Using Only loop's No recursion)

var values = [1, 34, 12, 4, 53, 2, 10];
var array = new Array([0, values.length - 1]);
while (array.length > 0) {
  const [low, high] = array.shift();
  if (low > high) continue;
  let pivot_index = high;
  let first_index = low;
  for (let moving_index = low; moving_index < high; moving_index++) {
    if (values[moving_index] <= values[pivot_index]) {
      const temp = values[first_index];
      values[first_index] = values[moving_index];
      values[moving_index] = temp;
      first_index++;
    }
  }
  const temp = values[first_index];
  values[first_index] = values[high];
  values[high] = temp;
  array.push([low, first_index - 1]);
  array.push([first_index + 1, high]);
}

console.log(values);

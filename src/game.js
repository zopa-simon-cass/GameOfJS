function arrayCreation(x, y) {
  let arr = new Array(x);
  for (let i=0; i<arr.length; i++) {
    arr[i] = new Array(y).fill().map( () => Math.floor(Math.random(2)));
    }
  return arr;
}

function cellCount(arr) {
  var cells = arr.map(element => { return element.length }).reduce((a,b) => a + b, 0)
  return cells;
}

function arrSum(arr){
  return arr.reduce(function(a,b){return a + b}, 0);
}

// function arrayFiller(arr) {
//   for (let i=0; i < arrayCreation.x; i++) {
//     for (let j=0; j < arrayCreation.y; j++) {
//       arr.fill(floor(Math.random(2)), 1);
//     }
//   }
// }
//
// arr.fill().map( () => Math.floor(Math.random(2)))

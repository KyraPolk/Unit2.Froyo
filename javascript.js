


let string = window.prompt("What are your most recent froyo flavor choices?");
//console.log(string.split(','))

//create an array from the string of flavor choices
let array = string.split(',');
console.log(array)//array from the input
function number(array){
  //need to loop over flavor array
  let response = {};
  //console.log(response.array[1])would be undefined
  for(let i = 0; i < array.length; i++){
    if(response[array[i]] === undefined){//if the key does not exist, create it and set count to 1
      response[array[i]] = 1;
    } else {
      response[array[i]]++
    }
  }
  return response;
}
console.log(number(array));

//vanilla, vanilla, vanilla, chocolate, strawberry
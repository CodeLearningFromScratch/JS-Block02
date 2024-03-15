





console.log('------------------------------- Block 02 start -------------------')

// Block 02 start --------------------------------------------------------------------


// Ex 1
var arr = ["milk", "cheese", "car", "lime"];
var index = 2;

const assigner = (item, number) => {
   return item[number]
  } 
  console.log('Ex 1:', assigner(arr, index))

  console.log('------------------------------------------------------------------')
  
  // Ex 2
  var arr = ["milk", "cheese", "car", "lime"];

  const takeAll = (array_items) => {
    return   array_items.reverse();
   }
  console.log('Ex 2:', takeAll(arr))

  console.log('------------------------------------------------------------------')

  // Ex 3
  var arr = ["banana", "apple", "orange"];
  var arr2 = ["tv", "dvd-player", "playstation"];
  var pos = 2;

  const swap = (ar1, ar2, position) => {

   const temp = ar1[position];
 
   ar1[position] = ar2[position];
   ar2[position] = temp;
 
   const another_array = [[arr], [arr2]] 

    return another_array
   }
   console.log('Ex 3:', swap(arr, arr2, pos))

   console.log('------------------------------------------------------------------')

  // Ex 4
  var arr = ["cheese", "salame", "bread", "water", "pizza"];
  var position = 2;

  const splicer = (array, index) => {
   array.splice(index, 1);
   return arr
  }
console.log('Ex 4:', splicer(arr, position))

console.log('------------------------------------------------------------------')

// Ex 5
var arr = ["car", "soap", "banana", "tv", "toothbrush"];

const removeFirstAndLast = (array) => {
    array.splice(0, 1);
    array.splice(-1, 1);
    return arr
   }
console.log('Ex 5:', removeFirstAndLast(arr, position))

console.log('------------------------------------------------------------------')

// Ex 6
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 4, 523, 44, 3454];

const removeAll = (array) => {
    array.splice(0);
    return arr
   } 
console.log('Ex 6:', removeAll(arr))

console.log('------------------------------------------------------------------')

// Ex 7
var arr = ["one", "two", "three", "four"];

const pusher = (array) => {

   // option 1
      let arr2 = [];
      arr2.push(array)
      return arr

   // option 2
   // let newArray = [...array]; 
   // return newArray

    
   } 
   console.log('Ex 7:', pusher(arr))

console.log('------------------------------------------------------------------')

// Ex 8
var arr = [
    "Breaking bad",
    "WestWorld",
    "Psych",
    "Games of Thrones",
    "Gotham",
    "Spartacus",
    "Dexter",
    "Office",
  ];

  const take_and_push = (array, index2, index4) => {

    const newArray = [];

    const item2 = array[index2];
    const item4 = array[index4];

    newArray.push(item2, item4)

    return newArray
    
   } 
   console.log('Ex 8:', take_and_push(arr, 2, 4))

   console.log('------------------------------------------------------------------')

   // Ex9
   var arr1 = ["Breaking bad", "WestWorld", "Psych", "Games of Thrones"];
   var arr2 = ["Gotham", "Spartacus", "Dexter", "Office"];

   const concatenator = (array1, array2) => {
    return array1.concat(array2)
   } 
   console.log('Ex 9:', concatenator(arr1, arr2))

   console.log('------------------------------------------------------------------')

   // Ex10
   var arr = ["glass", "car", "watch", "sofa", "macbook"];

   const findPosition = (array, element) => {
     return array.indexOf(element);
   } 
   console.log('Ex 10:', findPosition(arr, "car")) // 1
   console.log('Ex 10:', findPosition(arr, "sofa")) // 3
   console.log('Ex 10:', findPosition(arr, "glass")) // 0

   console.log('------------------------------------------------------------------')

   // Ex 11
   var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"];

   const isThere_1 = (array, item) => {
    return array.includes(item)
   } 
   console.log('Ex 11:', isThere_1(arr, "red")) // true
   console.log('Ex 11:', isThere_1(arr, "banana")) // false

   console.log('------------------------------------------------------------------')

   //12
   var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"];

   const isThere_2 = (array, item) => {
    return !array.includes(item)
   } 
   console.log('Ex 12:', isThere_2(arr, "red")) // false
   console.log('Ex 12:', isThere_2(arr, "banana")) // true   
   
   console.log('------------------------------------------------------------------')

   //13
   var str = "I,Really,Like,Pizza";

   const characterRemover = (string, comma) => {
    return  string.split(comma).join(' ')
   } 
   console.log('Ex 13:', characterRemover(str, ",")) 

   console.log('------------------------------------------------------------------')

   //14
 
   const isArrayFunc = (argument) => {
    return Array.isArray(argument);
   } 
   console.log('Ex 14:', isArrayFunc( { name: "antonello" } ))   // false
   console.log('Ex 14:', isArrayFunc( ["name", "antonello"] )) // true  
   console.log('Ex 14:', isArrayFunc( [[], [], {}, "antonello", 3, function () {}] )) // true  

   console.log('------------------------------- Block 02 end -------------------')

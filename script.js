//Nested Loops
let students = ["Alice", "Bob", "Charlie"];
let subjects = ["Math", "Science"];

for (let i = 0; i < students.length; i++){
    for(let j = 0; j < subjects.length; j++){
        console.log(students[i], subjects[j]);
    }
}

//Even Indexed
const array = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < array.length; i += 2){
    console.log(array[i]);
}

//Conditional Statements
let array1 = ["a", "b", "c", "d"];
let array2 = ["red", "green", "blue"];

if (array1.length > array2.length){
    console.log("array1 has a greater length.");
} else if (array1.length < array2.length){
    console.log("array2 has a greater length.");
} else{
    console.log("Both arrays have the same length.");
}

//Reverse the Order
let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = numbers.length - 1; i >=0; i--){
    reversed.push(numbers[i]);
}

console.log(numbers);
console.log(reversed);



/*

//part1
let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits.length); // 3

console.log(fruits[0]); // “Apple”
console.log(fruits[1]); // “Orange”
console.log(fruits[2]); // Plum

//part2
console.log(arr);
console.log(arr2);

arr2[1] = 100;
console.log(arr2);
console.log(arr2[1]);

console.log(arr2.length); //amount of Elements in the array
console.log(arr2.length - 1); // hightes index in the array
console.log(arr2[arr2.length - 1]); //last element of the array

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[fruits.length]);

//part3
let groceryList = [];

groceryList[0] = "Apples";
groceryList[1] = "Milk";
groceryList[2] = "Bread";
groceryList[3] = "Eggs";
groceryList[4] = "Cheese";

console.log("Items in stock:",groceryList.length);
console.log("grocery list:", groceryList);

groceryList[1] = null;
groceryList[3] = null;

groceryList.length += 2;

groceryList[5] = "Butter";
groceryList[6] = "Tomatoes";


console.log("grocery list:", groceryList);
console.log("grocery length:", groceryList.length);


let arr = new Array ();
let arr2 = ["hello world", 200, true];


//part4

let fruits = ["apple", "orange", "plum"];
console.log(fruits);

fruits.push("banana");
console.log(fruits);

let newfruits = fruits.push("peach");
console.log(newfruits);

fruits.pop();
console.log(fruits);

let poppedFruit = fruits.pop();
console.log(poppedFruit);

let shoppingCart = [];

shoppingCart.push("Milk", "Bread", "Eggs");
console.log(shoppingCart);

lastItem = shoppingCart.pop();

console.log(lastItem);
console.log(shoppingCart);

//part5

let pets = ["Dog", "Cat", "bird", "fish", 12];

for (let index = 0; index < pets.length; index++) {
    console.log("initialized index value is:", index);
    console.log(`Condition is met as index is less than ${pets.length}`);
    console.log(pets[index]);
}

*/
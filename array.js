let chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea"]

// console.log(chaiTypes[2]);

// console.log(`Total chai types: ${chaiTypes.length}`);

// chaiTypes.push("Herbal Tea")
// chaiTypes.pop();

// let index = chaiTypes.indexOf("Green Tea")
// console.log(index);


// if (index != -1){
//     chaiTypes.slice(index, 1)
// }

// console.log(chaiTypes); 

// chaiTypes.forEach((chai, index) => {
//     console.log(`${index + 1}: ${chai}`);
    
// });

let moreChaiTypes = ["Oolong Tea", "White Tea"]
let allChaiTypes = chaiTypes.concat(moreChaiTypes)
// console.log(allChaiTypes);


let newChaiTypes = [...chaiTypes, "Chamolina Tea"]
// console.log(newChaiTypes);


// Topic :- Object 

let chaiRecipe = {
    name : "Masala Chai",
    ingredients: {
        teaLeavea: "Assam Tea",
        milk: "Full Cream Tea",
        sugar: "Brown Sugar",
        spices: ["Dalchini", "Ginger"]
    },
    instruction: "Boil Water, add tea leaves, milk, sugar and spices"
}
// console.log(chaiRecipe);

// console.log(chaiRecipe.instruction);


let updatedChaiRecipe = {
    ...chaiRecipe,
    instruction : "Boil Water, add tea leaves, milk, sugar, spices with some love"
}
// console.log(updatedChaiRecipe);

let {name, ingredients} = chaiRecipe
let[firstChai, secondChai] = chaiTypes

// console.log(ingredients);
// console.log(firstChai);



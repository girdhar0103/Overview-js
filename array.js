let chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea"]

console.log(chaiTypes[2]);

console.log(`Total chai types: ${chaiTypes.length}`);

chaiTypes.push("Herbal Tea")
chaiTypes.pop();

let index = chaiTypes.indexOf("Green Tea")
console.log(index);


if (index != -1){
    chaiTypes.slice(index, 1)
}

console.log(chaiTypes); 

chaiTypes.forEach(() => {})

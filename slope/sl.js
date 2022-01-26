function collectAnimals(...animals){
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

let combineFruit = (fruit, sweets, vegitables)=>{
    return{
        fruit,
        sweets,
        vegitables
    }
}
console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

function parseSentence(location, duration){
    return `We're going to have a good time in ${location} for ${duration}`
}
parseSentence({
    location:"Burly Idaho",
    duration:"2 weeks"
})
console.log(parseSentence("Burly Idaho", "2 weeks"))

const first =(items)=>{
    const[firstItem, secondItem, thirdItem] =  items;
    return firstItem
}
console.log(first(["jacket", "hat","gloves"]))

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const listFavs =(arr) =>{
    const[firstFav, secondFav, thirdFav] =arr
    return `My top three favorite activities are  ${firstFav},  ${secondFav} , and   ${thirdFav}`
}

console.log(listFavs(favoriteActivities))

function combineAnimals(array1, array2, array3) {
    return array1.concat(...array2, ...array3)
    }
    
    const a = ["dog", "cat", "mouse"];
    const b = ["jackolope"];
    const c = ["platypus"];
    
    console.log(combineAnimals(a, b, c))
   
const product = (a, ...b) => {
    const numbers = [a, ...b];
    return numbers.reduce((acc, number) => acc * number, 1);
};
    
console.log(product(1, 3, 4, 5, 6));
function unshift(array, ...second) {
    return array.concat(...second);
}

console.log(unshift(["a", "b", "c", "d", "e"], ["a", "b", "c"])); 

function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ");
        const [firstName, lastName] = [...name]
        const person = {
            firstName,
            lastName}
        return person;
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
       
const five =[1,2,4,5,6,7,8,9]
const high = five.filter(function(g){
    return g >=5
})
console.log(high)
const even = five.filter(function(e){
    if(e %2 ===0){
        return e
    }
})
console.log(even)
const word = ["dog", "wolf", "by", "family", "eaten", "camping"]
const few = word.filter(function(w){
    if(w.length <=5){
        return w
    }
})
console.log(few)
const ill = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
const inClub = ill.filter(function(a){
    if( a.member){
        return a
    }
})
console.log(inClub)
const matrix = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const old = matrix.filter(function(m){
    if(m.age >=18){
        return m
    }
})
console.log(old)
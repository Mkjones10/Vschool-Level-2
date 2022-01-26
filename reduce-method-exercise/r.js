const num = [1,2,3,4,5,6,7,8,9]
const result = num.reduce(function(final,num){
    final += num
    return final
})
console.log(result)
const con = num.reduce(function(final, num){
    return final += num.toString()
})
console.log(con)

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const a = voters.reduce(function(final, voters){
    if(voters.voted){
        final++
    }
    return final
},0)
console.log(a)
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const buy = wishlist.reduce(function(final, wishlist){
    return final += wishlist.price
},0)
console.log(buy)
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
const flatten = arrays.reduce(function(final,arrays){
    return final.concat(arrays)
})
console.log(flatten)
const yto = voters.reduce(function(final, voters){
    if(voters.age >=18 && voters.age <=25){
        final.young ++
        if(voters.voted){
            final.youngVote++
        }
    }
    if(voters.age >=26 && voters.age<=35){
        final.mid++
        if(voters.voted){
            final.midVote++
        }
    }
    if(voters.age >=36 && voters.age<=56){
        final.old++
        if(voters.voted){
            final.oldVote++
        }
    }
    return final
},{youngVote: 0 , 
young: 0,
midVote: 0, 
mid: 0,
oldVote: 0, 
old: 0})
console.log(yto)
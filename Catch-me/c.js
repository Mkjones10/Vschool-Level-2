function add(a,b){
    try{
        if(typeof a !==  'number'){
            throw new Error('this is not a Number try again')
        }
        else if(typeof b !== 'number'){
            throw new Error("this is not a number")
        }
        else{
            return a+b
        }
        }
    catch(err){
            console.log(err)
    }
   return a+b 
}

try{
    add(1,2)
}
catch(err){
    console.log('new error')
}
console.log(add(1,2))
var user = {
    username: "sam", 
    password: "123abc"};
function login(username, password){
  try{
      if(username!==user.username){
          throw new Error('this username is not in our records')
      }
      else if(password !== user.password){
          throw new Error('this password is incorrect')
      }
      console.log('login successful!')
  }
catch(err){
    console.log(err)
}
}
console.log(login('sam', '123'))

try {
    login('sam', '123abc');
} catch {
    console.log(`login successful!`)
}

try {
    login('samm', '123abc');
} catch(err) {
    console.log(`wrong credentials`)
}
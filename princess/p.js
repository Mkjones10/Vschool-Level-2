class Player{
    constructor(name){
        this.name = name
        this.coins =0
        this.status ='small'
        this.hasStar = false
        this.gameActive = true
    }
    setName(namePicked){
        this.name = namePicked
    }
    gotHit(){
        if(this.status ==='SuperStar'){
            this.status = 'big'
        }
        if(this.hasStar){
            this.hasStar = false
            console.log('The star protected you,but you now have none ')
            this.status = 'big'
        }
        else if(this.status ==="big"){
            this.status = 'small'
        }
        else{
            this.status ='Dead'
            this.gameActive = false
        }
    }
    gotMushrooom(){
        if(this.status === 'big'){
            this.status = 'SuperStar'
            console.log('You got a star!')
            this.hasStar = true
        }
        else if(this.status ==='small'){
            this.status ='big'
        }
        // else if(this.status === 'SuperStar'){
        //     console.log('You got a star!')
        //     this.hasStar = true
        // }
        
    }
    addCoin() {
            this.coins += 1;
    }
    print(){
        console.log(`Name: ${this.name}\nCoins: ${this.coins}\nStatus: ${this.status}\nStar Power: ${this.hasStar}\n `)
    }
}
const user = new Player('Mario')

const peachSave =(user)=> {
    let random = Math.ceil(Math.random()*3);
    if(user.status ==='Dead'){
        console.log('game over')
        clearInterval(gameStart)
    }
    else if(random === 1){
        user.gotHit()
        user.print()
    }
    else if (random === 2) {
        user.addCoin();
        user.print();
    } 
    else if (random === 3) {
        user.gotMushrooom();
        user.print();
    }
}

const gameStart = setInterval(() => peachSave(user), 1500);

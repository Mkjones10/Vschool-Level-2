const countBtn = document.querySelector('.countBtn button');
let countNum =document.querySelector('.countNum h1') 
let clickDiv = document.getElementById('newclicks')
let myClick = 0
let final = document.createElement('h2')
const clicks = localStorage.getItem('clicked')
console.log(clicks)
if(clicks){
    final.textContent = clicks
}
countBtn.addEventListener('click', function(e){
        e.preventDefault()
       let countUp = myClick++
        countNum.innerText = myClick
        localStorage.setItem('count', countUp)
        // created a 'clicks' variable that we can append to the 'clickDiv'
        
    })
    // clickDiv.textContent = oldClicks



var timeDwn = document.querySelector('#time h1')
 var initTimer = 30
 start.addEventListener('click' , function(e){
     e.preventDefault()
     console.log(initTimer);
            const a = setInterval(() => {
                 initTimer --
                 timeDwn.innerHTML = initTimer
                 if(initTimer<=0){
                     clearInterval(a)
                 }
                       
             }, 1000);
     setTimeout(function(){
        if(initTimer<=0){
            // console.log(localStorage.getItem("count"))
            // clickDiv.append(localStorage.getItem('count'))
            localStorage.getItem('clicked')
            storedData()
           
            
        }
    }, 30000);
    })

function storedData(){
    final.textContent = myClick
    const saved = myClick
     console.log('num', saved)
     localStorage.setItem('clicked', saved)
    
}
clickDiv.append(final)
const saveBtn = document.getElementById('save')
saveBtn.addEventListener('click', storedData)



    

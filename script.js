// function ejecutar(){
//     let name = document.getElementById("name").value
//     let number = document.getElementById("number").value

//     document.getElementById("va").innerHTML = `Tu nombre es ${name} y tu numero fue ${number}`
    
// }

function fizzBuzz(){
    let number = parseInt(document.getElementById("number").value) + 1;
    console.log(number)
    // let listOfNumber = []
    for (let i=1; i<number; i++){
        let newElement = document.createElement("li");
        console.log(i)
        if(i%5==0 && i%3==0){
            newElement.innerHTML = `${i} - FizzBuzz`;
        }
        else if(i%5==0){
            newElement.innerHTML = `${i} - Buzz`;
        }
        else if(i%3==0){
            newElement.innerHTML = `${i} - Fizz`;
        }
        else{
            newElement.innerHTML = `${i} - `;
        }
        document.getElementById("fizz").appendChild(newElement);
        console.log(number)
    }
}

// document.getElementById("dark").addEventListener('click', function(){
//     document.getElementsById("modo").style.color = 'white';
//     document.getElementsById("modo").style.background = 'black';
// })

function dark(){
    document.getElementById("modo").style.color = 'white';
    document.getElementById("modo").style.background = 'black';
}

function light(){
    document.getElementById("modo").style.color = 'black';
    document.getElementById("modo").style.background = 'white';
}


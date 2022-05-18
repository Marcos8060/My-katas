// make a new array of only first and last element
var a = [4,8,12,17,20]

let newArr = [a[0],a[4]]
console.log(newArr);


form.addEventListener('submit',function(e){
    e.preventDefault()
    const userText = document.getElementById('number').value
    let newNumber = ''
    if(userText.startsWith('0')){
        newNumber = userText.replace('0','+254',1)
    }else if(userText.startsWith('+254')){
        newNumber = userText.replace('+254','0',1)
    }
    const result = document.getElementById('result')
    result.innerHTML += `
     <p>${newNumber}</p>
    `
})
// make a new array of only first and last element
// var a = [4,8,12,17,20]

// let newArr = [a[0],a[4]]
// console.log(newArr);


// return a users number to start with 0 or +254 depending on the first digits of the number
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     const userText = document.getElementById('number').value
//     let newNumber = ''
//     if(userText.startsWith('0')){
//         newNumber = userText.replace('0','+254',1)
//     }else if(userText.startsWith('+254')){
//         newNumber = userText.replace('+254','0',1)
//     }
//     const result = document.getElementById('result')
//     result.innerHTML += `
//      <p>${newNumber}</p>
//     `
// })


// check if user email contains @ or .
// form.addEventListener('submit',function(e){
//     e.preventDefault()

//     const userEmail = document.getElementById('email').value
//     if(userEmail.includes('@') && userEmail.includes('.')){
//         alert('congratulations')
//     }else{
//         alert('we are sorry')
//     }
// })


// find the largest number out of three form input values
// form.addEventListener('submit',function(e){
//     e.preventDefault()

//     const one = document.getElementById('first').value
//     const two = document.getElementById('second').value
//     const three = document.getElementById('third').value

//     var first = ''
//     var second = ''
//     var third = ''

//     first = one
//     second = two
//     third = three

//     const result = document.getElementById('result')
//     result.innerHTML += `
//      <p>${first}</p>
//      <p>${second}</p>
//      <p>${third}</p>
//     `

//        let LargestNumber = Math.max(first,second,third)
//         console.log(LargestNumber);
// })
import { data, data2 } from './data.js'
const content = document.getElementById('content')

let messageObj = []
for (let data of data2){
    messageObj.push({
        name: data.name,
        message: data.message
    })
}

let html = ""
function display(arr){
    for (let i = 0; i < arr.length; i++){
        html += `<p>${arr[i].name}: ${arr[i].message}</p>`
    }
}

display(messageObj)

content.innerHTML = html

































// console.log(data)
// console.log(data.name)
// console.log(data.age)
// console.log(data.nationality)
// console.log(data2)
// const btn = document.getElementById('btn')

// btn.onclick = () => {
//     content.textContent = `hello my name is ${data.name}, i am ${data.age}
//     and i am from ${data.nationality}
//     and now we are going to test data2
//     hello my name is ${data2[0].name}`
//     content.textContent = textforhtml
// }

// let textforhtml = ""
// let age = [];

// for (let data of data2){
//     textforhtml += `hello my name is ${data.name} \
//     and my age is ${data.age} 
//     and i am from ${data.nationality}`
//     age.push(data.age)
// }

// console.log(age)
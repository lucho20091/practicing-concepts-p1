import { data } from './data.js'

console.log(data)
console.log(data.name)
console.log(data.age)
console.log(data.nationality)

const btn = document.getElementById('btn')
const content = document.getElementById('content')

btn.onclick = () => {
    content.textContent = data.name
}
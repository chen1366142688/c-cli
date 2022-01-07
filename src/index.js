import './index.css'
import reba from '@/assets/reba.jpg'
console.log('hello webpack nice')
new Promise((resolve) => { 
  resolve('哈哈哈')
}).then((res) => { 
  console.log(res)
})
console.log(123)
document.querySelector('#img').src = reba
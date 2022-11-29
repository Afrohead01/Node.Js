async function fun1(){
console.log('a');

console.log('b');



    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(() => resolve('c'), 3000)
    })


    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(() => resolve('d'), 0)
    })
let value1 = await promise1
console.log(value1)

let value2 = await promise2
console.log(value2)

console.log('e');

}
fun1()

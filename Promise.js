const promise1 = Promise.resolve('a')
const promise2 = Promise.resolve('b')

const promise3 = new Promise((resolve,reject)=>
setTimeout(resolve, 3000, 'c'));

const promise4 = new Promise((resolve,reject)=>
setTimeout(resolve, 0 , 'd'));

const promise5 = Promise.resolve('e')

Promise.all([promise1,promise2,promise3,promise4,promise5]).then(values => console.log(values))





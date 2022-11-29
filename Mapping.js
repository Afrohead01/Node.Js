array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
let result = array.map(function (emptyString){
    if (emptyString == ' '){
        return 'Empty String'
    }
    else{
       return emptyString
    }
})
console.log(result)

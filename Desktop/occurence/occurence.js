// Using ES6 to solve the algorithm of checking the occurence of element in an array

function countOccurence(array, searchElement){

const number=[1,2,3,4,5,6,2]
const count=countOccurence(number,2)


return array.reduce((accumulator, current)=> {
    const occurence=(current===searchElement)
    return accumulator +occurence;
},0)

}
console.log(count);


// using ES5 to solve the algorithm question
function countOccurence(array, searchElement){
    let count=0;
    for(let element of array)
    if(element ===searchElement)
    count++
    return count;
console.log(count);
}
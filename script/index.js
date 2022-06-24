'use strict';


// indexOf
const arrIndexOf = [2,4,32,6,23,4,3,2];

const indexOf = (arrIndexOf, item) => {
    console.log("//Task indexOf")
    for(let i = 0; i < arrIndexOf.length; i += 1){
        if(arrIndexOf[i] === item){
            return  console.log(i);
        }
    }
    return -1;
}

indexOf(arrIndexOf,4);


// lastIndexOf

const arrLastIndexOf = ['red','blue','green','lime','yellow'];

const lastIndexOf = ( arrLastIndexOf, item) => {
    console.log('//Task lastIndexOf');
    for ( let i = arrLastIndexOf.length; i > -1; i--) {
        if ( arrLastIndexOf[i] === item) {
            return console.log(i);
        }
    }
    return -1;
}

lastIndexOf(arrLastIndexOf, 'lime');


//findItem

const arrFindItem = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10];

const findItem = (arr , item) => {
    console.log('//Task findItem');
    for ( let i = 0; i < arr.length; i++) {
        if ( item(arr[i]) ) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(findItem(arrFindItem, (item) => {
    return item === 3 + 7 ;
}));


//findItemIndex

const arrFiItIn = [ 1, 2, 3, 4, 'number 5', 6, 7, 8, 9,10];

const findItemIndex = (arr, index) => {
    console.log('//Task findItemIndex');

    for(let i = 0; i < arr.length; i += 1){
        if( index(arr[i]) ){
            return i;
        }
    }
    return -1;
}

console.log(findItemIndex(arrFiItIn, (index) => {
    return index === 1;
}));



//includes

const arrIncludes = [ 1, 2, "3", 4, 'number 5', 6, 7, 8, 'red',10];

const includes = (arr, element) => {
    console.log('//Task includes');

    for(let i = 0; i < arr.length; i += 1){
        if(arr[i] === element){
            return true;
        }
    }
    return false;
}

console.log(includes(arrIncludes,"red"));




//every
const arrEvery = [ 1, 2, 4, 6, 7, 8,10];

const every = (arr, callbackFunk) => {
    console.log('//Task every');

    for(let i = 0; i < arr.length; i += 1){
        if( !callbackFunk(arr[i]) ){
            return false;
        }
    }
    return true;
}

console.log(every(arrEvery, (condition) => {
    return condition > 0;
}));



//some
const arrSome = [ 7,3,43,2,9, '100Balov'];

const some = (arr, callbackFunk) => {
    console.log('//Task some');

    for(let i = 0; i < arr.length; i += 1){
        if( callbackFunk(arr[i].length) ){
            return true;
        }
    }
    return false;
}

console.log(some(arrSome, (condition) => {
    return condition > 3;
}));
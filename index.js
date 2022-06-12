function firstClass(spy, chai) {
    console.log(spy + chai);
}
firstClass()

function receivesAFunction(callback) {
    callback(spy[1], chai[2]);
}
const spy = 'ring';
const chai = 'bing';

function returnsANamedFunction() {
    return firstClass;
}

function returnsAnAnonymousFunction(apple) {
    return function(bag) {
        return apple + bag
    }
}

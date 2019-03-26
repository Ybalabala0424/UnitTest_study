module.exports = function (...a) {
    var array = [];
    for (let n of a){
        array.push(n);
    }
    return array;
};

function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++)
        if (func(arr[i])) return arr.slice(i)
    return []
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })) // [3, 4])
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; })) // [1, 0, 1])
console.log(dropElements([1, 2, 3], function (n) { return n > 0; }))// [1, 2, 3])
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })) //[3, 9, 2]
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }))
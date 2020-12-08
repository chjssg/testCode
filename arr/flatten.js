//  数组扁平化
var arr  = [1, [2, 3, [4, 5, [6, 7]]], [12, 13, [14, 15, [16, 17]]]];
//  变为一维数组, sharrow是否只扁平一层
function flatton(arr, sharrow) {
    let array = [];
    arr.forEach(element => {
        if(Array.isArray(element)) {
            if (sharrow) {
                array.push(...element)
            } else {
                array.push(...flatton(element))
            }

        } else {
            array.push(element)
        }

    });
    return array
}

console.log(flatton(arr, 1));
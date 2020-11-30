
function max(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

function min(arr) {
    let smallest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}

function mean(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i]
    }
    return result/arr.length
    // Ledtråd: Börja med att räkna ut summan av alla element
}

const array = [7, 5, 2, 3, 6, 8]
console.log(max(array))
console.log(min(array))
console.log(mean(array))

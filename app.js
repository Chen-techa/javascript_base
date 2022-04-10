// number 
// let a = 1
// // string
// let b = '你说什么?'
// // array
// let arr = new Array()
// arr[1] = 'a'
// arr[2] = 'b'
// let arr1 = ['1', '2', '3']
// // bool
// let c = true
// let d = false
// // object
// const e = {
//     username: 'username',
//     password: 'password'
// }
// // undefiend null
// let f = undefined
// let g = null

// let aaa = parseInt('123')


// num = 1
// // console.log(num++)
// console.log(++num)


// let arr = [1,2,3,4,5,6,7,8,9,10]

// let ava = arr.reduce((a, b) => a + b) // 55

// let max = Math.max(...arr) // 10
// console.log(max)
// console.log(ava)

// let item = 22

// console.log(arr.push(item))
// let c = arr.join(',')
// console.log(c)


// let arr = [5, 3, 4, 1, 2, 6,22,50,10,30,23,40,56]

// for (let i = 0; i <= arr.length - 1; i++) { 
//     for (let k = 0; k <= arr.length - i - 1; k++) {
//         if (arr[k] > arr[k + 1]) {
//             let temp = arr[k]
//             arr[k] = arr[k + 1]
//             arr[k + 1] = temp
//         }
//     }
// }

// console.log(arr)

function paixu(arr) {
    for (let i = 0; i <= arr.length - 1; i++) { 
        for (let k = 0; k <= arr.length - i - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                let temp = arr[k]
                arr[k] = arr[k + 1]
                arr[k + 1] = temp
            }
        }
    }
    return arr
}

let a = [5,7,8,2,1,6,10,22,11,20]

console.log(paixu(a))
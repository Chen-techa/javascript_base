 ## JavaScript回炉重造

 ### 初识JavaScript

 浏览器执行JavaScript简介

 浏览器分成两个部分：渲染和JavaScript引擎

 - 渲染引擎：用来解析HTML和css，俗称内核
 - JS引擎：也被称为JavaScript解释器，用 来解读网页中JavaScript的代码对其进行处理

### JavaScript组成

- JavaScript语法 - ECMAScript
- DOM - 页面文档对象模型
- BOM - 浏览器对象模型

**注：** 
- ECMAScript规定了JS编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法标准
- DOM，文档对象模型，可以对页面上的各种元素进行调整（大小、位置、颜色）
- BMO，浏览器对象模型，提供了独立的内容、可以在浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器的窗口，比如弹出框
- JavaScript分为：内嵌、行内、外部三种方式

### JavaScript注释

```javascript
// 单行注释
/**
 * 多行注释
 * **/
```

### JavaScript变量（ES5，ES6）

在ES5中，变量的声明需要使用`var`, 在ES6中，变量的声明需要使用`let`或者`const`，同时ES5中的变量声明声明的是全局变量在ES6中，变量声明的是局部变量只可以在局部进行使用，需要注意的是，使用`const`声明的变量是一开始需要就需要赋值的，并且不可以更改

```javascript
var a = 1
a = 2 
let b = 1
b = 2
const c = 1
c = 2 // Error Uncaught TypeError: Assignment to constant variable.
```

### JavaScript数据类型

在JavaScript有几种数据类型：`number`(数字),`string`(字符串),`array`(数组)，`bool`(布尔),`object`(对象),`undefined`,`null`,使用typeof可以检测数据类型

```javascript
// number 
let a = 1
// string
let b = '123'
// array
let arr = new Array()
arr[1] = 'a'
arr[2] = 'b'
let arr1 = ['1', '2', '3']
// bool
let c = true
let d = false
// object
const e = {
    username: 'username',
    password: 'password'
}
// undefiend null
let f = undefined
let g = null
// typeof
console.log(typeof e)

// 数据类型的转换
a.toString() // number -> string 
parseInt(b) // string -> number
```

### JavaScript运算符

JavaScript的运算符与数学中的运算符基本一致都包括加减乘除等于比较大小逻辑运算(`+`, `-`, `*`, `/`, `=`, `>`,`<`,`!`,`||`,`&&`)

```javascript
num1 = 10
num2 = 20
num3 = num1 + num2
num4 = num1 / num2
num5 = num1 * num2
num6 = num1 - num2

num1 = num1 + 1 // ++num, 先自增在返回
num1 = num1 - 1 // --num
num1 > num2 // false
num1 = num2 // false
num1 < num2 // true
! // 非 -> 不等
|| // or
&& // and
```

**注：**

| 运算符 | 优先级 | 顺序 |
| :----:|:-----:| :----:|
| 小括号 | 1 | () |
| 一元运算符 | 2 | == -- !|
| 算数运算符 | 3 | * -> / -> % -> + > - |
| 关系运算符 | 4 | >  >= < <=|
| 相等运算符 | 5 | == != === !== |
| 逻辑运算符 | 6 | and -> or|
| 赋值运算符 | 7 | = |
| 逗号运算符 | 8 | ，|

### JavaScript流程控制

`if`(判断),`switch`(循环),`: ?`(三元表达式),`for`(循环),`while`(循环),`do while`(循环),`break`(跳出循环),`continue`(跳过本次循环)

```javascript
if (a > b) {
    console.log('a > b')
} else if (a < b) {
    console.log('a < b')
} else {
    console.log('a = b')
}

switch (a) {
    case 1:
        console.log('a = 1')
        break
    case 2:
        console.log('a = 2')
        break
    default:
        console.log('a = 3')
}

a > b ? console.log('a > b') : console.log('a < b')

for (let i = 0; i < 10; i++) {
    console.log(i)
}

while (i < 10) {
    console.log(i)
    i++
}

do while (i < 10) {
    console.log(i)
    i++
}
```

### JavaScript的数组

数组：数组是指一组`数据的集合`，其中每个数据被称为`元素`，在数组中可以存放`任意数据类型`。数组是将`一种数据存储在单个变量名下`的方式，可以使用`索引`来访问数组中的元素。

数组的创建方式: 1、`new Array()` 2、`[]`，注意：`[]`是一个空数组，不能直接赋值给变量，需要使用`new Array()`来创建数组


访问数组：`arr[index]`，index为索引，从0开始

数组的遍历：1、`for` 2、`for in` 3、`for of`，`for in`遍历的是数组的索引，`for of`遍历的是数组的元素

数组长度：`arr.length`

计算数组的和平均值：`arr.reduce((a, b) => a + b) / arr.length`,`arr.reduce((a, b) => a + b) / arr.length`

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10]
arr.length // 10
arr.reduce((a, b) => a + b) // 55
arr.reduce((a, b) => a + b) / arr.length // 5.5
```

数组的最大值：`Math.max(...arr)`

数组转化为字符串: `arr.join(',')`

数组新增元素：`arr.push(item)`

数组的筛选：`arr.filter(item => item > 3)`

数组去重：`arr.filter((item, index, arr) => arr.indexOf(item) === index)`

翻转数组：`arr.reverse()`

数组排序,冒泡排序 ->  两两比较，大的放在后面，小的放在前面，每次比较完一轮，最大的放在最后，最小的放在第一位

```javascript
let arr = [5, 3, 4, 1, 2, 6,22,50,10,30,23,40,56]

for (let i = 0; i <= arr.length - 1; i++) { 
    for (let k = 0; k <= arr.length - i - 1; k++) {
        if (arr[k] > arr[k + 1]) {
            let temp = arr[k]
            arr[k] = arr[k + 1]
            arr[k + 1] = temp
        }
    }
}

console.log(arr)
```

### JavaScript的函数

函数：函数是指一段代码的封装，可以在函数内部调用函数，或者在函数外部调用函数。函数的参数可以是多个，也可以是无数个，参数的类型可以是任意的。（重复调用）

```javascript
function add(a, b) {
    return a + b
}

add(1, 2) // 3 
add(1, 5) // 6
```

函数的返回：`return`，`return`后面可以跟一个值，如果没有`return`，那么函数的返回值就是`undefined`

`arguments`: 函数的参数，可以通过`arguments`来访问

### JavaScript作用域、执行上下文、词法环境

作用域：`var`和`let`的作用域是局部的，`let`的作用域是块级的，`var`的作用域是全局的。

全局变量和局部变量：全局变量是在函数外部定义的，局部变量是在函数内部定义的。

块级作用域：`{}`，`{}`内部的变量是局部变量，`{}`外部的变量是全局变量。

**执行上下文**

- 全局执行上下文：默认或者是基础的上下文，任何不在函数中的代码都在全局执行上下文之中。执行两件事：创建一个全局的`window`对象（在浏览器的状态下），并且设置`this`的值等于这个全局对象

- 函数执行上下文：每当一个函数被调用时, 都会为该函数创建一个新的执行上下文。

- `Eval`函数执行上下文 ： 执行在 eval 函数内部的代码也会有它属于自己的执行上下文

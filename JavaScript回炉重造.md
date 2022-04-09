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




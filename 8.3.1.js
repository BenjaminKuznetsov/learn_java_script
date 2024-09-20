// 8.3.1

// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms)
// }

// function f() {
//   alert("Hello!")
// }

// f.defer(1000) // выведет "Hello!" через 1 секунду

// 8.3.2

Function.prototype.defer = function (ms) {
  let func = this
  //   console.log("this", this)
  return function () {
    setTimeout(() => func.apply(this, arguments), ms)
  }
}

function f(a, b) {
  alert(a + b)
}

f.defer(1000)(1, 2) // выведет 3 через 1 секунду.

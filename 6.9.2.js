function f(x) {
  console.log(x)
}

function throttle(func, delay) {
  return function () {
    setTimeout(() => func.apply(this, arguments), delay)
  }
}

// создаём обёртки
let f1000 = throttle(f, 1000)
let f1500 = throttle(f, 1500)

f1000("test") // показывает "test" после 1000 мс
f1500("test") // показывает "test" после 1500 мс

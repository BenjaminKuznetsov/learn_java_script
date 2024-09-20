// Решение с использованием свойства функции
// function makeCounter() {
//   let counter = function () {
//     return counter.count++
//   }

//   counter.count = 0

//   counter.set = (value) => {
//     counter.count = value
//   }

//   counter.decrease = () => {
//     counter.count--
//   }

//   return counter
// }

// Решение с использованием замыкания
function makeCounter() {
  let count = 0
  let counter = function () {
    return count++
  }

  counter.set = (value) => {
    count = value
  }

  counter.decrease = () => {
    count--
  }

  return counter
}

let counter = makeCounter()

alert(counter()) // 0
alert(counter()) // 1

counter.set(10) // установить новое значение счётчика

alert(counter()) // 10

counter.decrease() // уменьшить значение счётчика на 1

alert(counter()) // 10 (вместо 11)

function throttle(func, delay) {
  let timerId

  return function () {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => func.apply(this, arguments), delay)
  }
}

const logger = throttle(console.log, 1000)

logger("a")
setTimeout(() => logger("b"), 200)
setTimeout(() => logger("c"), 500)

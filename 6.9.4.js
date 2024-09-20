function throttle(func, delay) {
  let cache
  let timerId

  return function () {
    if (!timerId) {
      func.apply(this, arguments)
    }
    cache = arguments
    timerId = setInterval(() => {
      if (cache) {
        func.apply(this, cache)
        cache = null
      }
    }, delay)
  }
}

const logger = throttle(console.log, 1000)

logger("a")
logger("b")
logger("c")

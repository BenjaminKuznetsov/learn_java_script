function sum(value) {
  sum.result = sum.result ? sum.result + value : value
  return sum
}

// sum(1)(2) == 3 // 1 + 2
// sum(1)(2)(3) == 6 // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15

console.log(sum.result)

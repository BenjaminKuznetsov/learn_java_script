let init = 0

function sum(arg) {
  init += arg

  return (arg) => init + arg
}

// alert(sum(1)(2))
alert(sum(5)(-1))

function Accumulator(init) {
  this.value = init
  this.read = () => {
    let input = +prompt("число?", 0)
    this.value += input
  }
}

const accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
alert(accumulator.value)

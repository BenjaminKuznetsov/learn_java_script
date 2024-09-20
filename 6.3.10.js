function makeArmy() {
  let shooters = []

  let i = 0
  while (i < 10) {
    let makeShooter = function () {
      let j = i
      return () => {
        console.log(j)
      }
    }
    let shooter = makeShooter()
    shooters.push(shooter)
    i++
  }

  return shooters
}

let army = makeArmy()

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0]()
army[1]()
army[2]()

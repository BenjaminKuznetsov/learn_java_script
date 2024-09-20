"use strict"

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" },
]

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1)
}

console.log(users.sort(byField("name")))
// console.log(users.sort(byField("age")))

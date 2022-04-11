//? фнукція для отримання значень об'єкта за ключами
function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop]
}

//const some = pick('value')({value: 1}) // -> 1

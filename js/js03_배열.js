// 배열 : []
let 배열 = [1, 2, "값"]

console.log(배열[0])
console.log(배열[1])
console.log(배열[2])

배열[2] = 3
console.log(배열[2])

let 중첩배열 = [["알파", 23], ["베타", 19], ["감마", 22]]
console.log(중첩배열)
console.log(중첩배열[0])
console.log(중첩배열[0][0])
console.log(중첩배열[0][1])

// 22를 꺼내보자
console.log(중첩배열[2][1])

// 배열에서 맨 뒤에 값을 추가하고 싶으면 push
중첩배열.push("델타")
console.log(중첩배열)

// 배열의 맨 뒤에서 빼고 싶다 pop
중첩배열.pop()
console.log(중첩배열)
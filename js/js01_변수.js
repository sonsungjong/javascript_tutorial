// js : 자바스크립트 (웹에서 동적 움직임을 주기 위한 프로그래밍 언어)
// C:\Users\계정명\AppData\Roaming\npm 폴더가 있어야 정상동작 (없으면 폴더 생성)
console.log("Hello World!")

// 프로그래밍 언어 : 변수 + 함수 + 자료구조
// 변수 : 저장공간, 데이터를 저장하는 공간
// 변수를 생성하기 위해선 var, let, const
// var : 옛날 변수 생성 방법
// let : 2015년 자바스크립트 신문법 이후의 변수 생성 방법
// const : 상수변수 (한번 값을 정하면 못바꿈)
var 변수이름 = 123
let 변수2 = 123
const 상수변수 = '한번 정하면 못바꿈'

console.log(변수2)        // 123
변수2 = 'Hello JS!'
console.log(변수2)        // Hello JS!
console.log(상수변수)

// 변수는 type(자료형)이 있다
// undefined, null, number, string, array, object, boolean
let 정해지지않음 = undefined
let 비어있음 = null
let 숫자 = 20            // +, -, *, /
let 문자열 = "글자"         // +
let 불리언 = false            // false, true (참거짓을 판단할 때)
let 배열 = [1, 3, 6, "아무개", true, false]
let 객체 = {
  '키워드': '값',
  'A': '에이',
  'B': '비'
}
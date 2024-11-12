/** 콜백(Callback) */
/**
 * 함수는 하나의 데이터로써, 소괄호를 열고 닫지 않으면 하나의 함수 데이터이고
 * 소괄호를 열고 닫아야지만, 함수를 실행한다고 배웠습니다.
 */

const a = () => {
    console.log("A");
};
const b = () => {
    console.log("B");
};
// a(b); // b: 콜백, 콜백 함수라고 부릅니다. 함수가 실행될 때, 인수/인자로 들어가는 또 다른 함수를 콜백이라 부릅니다.

const c = (callback) => {
    //callback은 함수 데이터이므로 소괄호를 열고, 닫아서 실행시킬 수 있다.
    console.log("C");
    callback(); //D
};

const d = () => {
    console.log("D");
};

c(d);

/** ---------------------------------------------------------------------------------------------------- */

const sum = (a, b) => {
    setTimeout(() => {
        return a + b;
    }, 1000);
};

console.log(sum(1, 2)); // undefined
console.log(sum(3, 7)); // undefined

/** undefined 뜨는 이유 3가지
 * 1, 객체에 없는 키의 값을 부를때 , 2, 함수에 리턴이 없을때
 * 3.변수 선언했는데 할당하지 않을때
 * 
*/

const sum2 = (a, b, c) => {
    setTimeout(() => {
        c(a + b); //리턴이없음
    }, 1000);
};

sum2(1, 2, (value) => {
    console.log(value); // 이 콜백함수가 실행되기 때무에 리턴이없어도 실행됨
});

// ???? ㅎ


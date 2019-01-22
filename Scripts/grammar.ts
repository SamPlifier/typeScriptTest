let x = 1;
let y;
let firstName = 'Sam';
let lastName: string = 'Davis-Castro';

let num1 = 100;
let num2: number = 20;

const addNumbers = (n1: number, n2: number, n3: number) => {
    const result = n1 + n2 + n3;
    const msg = `Sum is = ${result}`;
    alert(msg);
}
addNumbers(num1, num2, 7);

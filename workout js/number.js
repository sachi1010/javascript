let value=NaN;
console.log(Number.isNaN(value));

let finite=89;
let infinite=1/0;
console.log(Number.isFinite(finite));
console.log(Number.isFinite(infinite));

let integer=67;
let float=67.89;
console.log(Number.isInteger(integer));
console.log(Number.isInteger(float));

let string="265.89";
console.log(Number.parseInt(string));

let number=123567789.9876;
console.log(number.toLocaleString('en-US'));

let num=678;
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

let range=126378978;
console.log(range<Number.MAX_VALUE&&range>Number.MIN_VALUE);
console.log(Number.EPSILON);

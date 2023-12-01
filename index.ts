// --------ALl About Annotation

type Person = {
  name: string;
};

const person: Person = {
  name: "developer",
};

const temp: string | number = 4;
console.log(temp);

let fname: string = "developer";
fname = "ali raza";
console.log(fname);

let numb: number = 10;

numb = numb + 5;
console.log(numb);

// --------ALl About Type Inference

let named = "aliraza";
console.log(typeof named);
let numbI = 86767;
let isbol = true;

// --------ALl About Any Type

// --------ALl About Function Annotation

function nameFunc(params: string) {
  console.log(params);
}

nameFunc("aliraza");

function newFunc(params: string) {
  console.log(params);
  const numb = 10;
  return numb;
}
const res = newFunc("aliraza");

function defauleName(params: string = "aliraza") {
  console.log(params);
}

defauleName();

// --------ALl About Function Return Annotation

function ReturnNot(params: number = 5): number {
  return params * params;
}

const resp = ReturnNot();

console.log(resp);

const arrfunc = (arg: number = 4): number => arg * 4;
console.log(arrfunc());

// void in typescript
//a function that not return a value

const returnvoid = (argument: number): void => {
  console.log(argument);
};

console.log(returnvoid(4));

// Never type not return anything  or that variable can never have a value
//it can help catch errors at compile-time instead of run-time
// a varibale that can never have an value

//a function that always throws an error

function throwError(msg: string): never {
  throw new Error(msg);
}

function throwNever(msg: string): never {
  throw new Error(msg);
}
console.log(throwNever("hi developer"));

// Array Types

//array are the type of object that can stor multiple value

const arr2: (number | string | boolean)[] = [3, 4, 5, 6, "dev", false];

const arr3: Array<string | boolean> = ["develoepr", "engineer", false];

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

//multidimension array

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// Objects
type ObjType = {
  personTypeon: TntObj;
};
type TntObj = {
  nameMy: string;
  occupation: string;
  numb: number;
};
const personObj: { name: string; occupation: string } = {
  name: "raza",
  occupation: "developer",
};
const personTypeon: TntObj = {
  nameMy: "raza",
  occupation: "developer",
  numb: 50,
};

function objName({
  name = "newdev",
  numb = 90,
}: {
  readonly name: string;
  numb: number;
}): {
  readonly name: string;
  numb: number;
} {
  name = "engineer";
  console.log(name);

  return { name, numb };
}

const respt = objName({ name: "aliraza", numb: 50 });
console.log(respt);

// Intersection Type

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
  add?: string;
}

type Employee = Identity & Contact;

let e: Employee = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
};

// Union Type

var namenumb: string | number = "aliraza";

// Literal Type

let numberNum = 4 | 5 | 6;
numberNum = 4; //valid
numberNum = 10; //invalid

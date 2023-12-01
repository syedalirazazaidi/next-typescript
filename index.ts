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

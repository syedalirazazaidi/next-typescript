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

// Tuples Type

let skill: [string, number];
skill = ["Programming", 5];

let color: [number, number, number] = [255, 0, 0];

// Enums

enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}
interface TYPESTATUS {
  id: number;
  status: ApprovalStatus;
  description: string;
}

const request: TYPESTATUS = {
  id: 1,
  status: ApprovalStatus.approved,
  description: "Please approve this request",
};

function Person(ssn, firstName, lastName) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}

class PersonPublic {
  public ssn: string;
  public firstName: string;
  public lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let personPublic = new PersonPublic("153-07-3130", "John", "Doe");
console.log(personPublic.firstName);

class PersonPrivate {
  protected ssn: string;
  protected firstName: string;
  protected lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let personPrivate = new PersonPublic("153-07-3130", "John", "Doe");
console.log(personPublic.lastName);

class PersonExample {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

let persoexample = new PersonExample();

function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

let personOne = {
  firstName: "John",
  lastName: "Doe",
};

console.log(getFullName(personOne));

interface Car {
  wheel?: string;
  color?: string;
}

interface Civic extends Car {
  company?: string;
}

const objCar: Civic = {
  color: "red",
};

interface Collection<T> {
  add(o: T): void;
  //   remove(o: T)?: void;
}

// const Add<T>=((arg:T):T)=>{
// return arg
// }
// add('aliraza')

function Add<T>(param: T): T {
  return param;
}
Add("developer");

function randomKeyValuepair<T>(params: { [key: string]: T }): {
  key: string;
  value: string;
} {
  return { key: params.key, value:  params.key };
}
randomKeyValuepair({ key: "develoepr", value: "propertie" });

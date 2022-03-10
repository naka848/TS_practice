type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type EleventedEmploee = Admin & Employee;

const e1: EleventedEmploee = {
  name: "Max",
  privileges: ["creare-server"],
  startDate: new Date(),
};

console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;

// Universalはnumber型になる
type Universal = Combinable & Numeric;

// Universalはnumber型になる
const u : Universal = 4;

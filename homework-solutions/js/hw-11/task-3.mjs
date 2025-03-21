import { textSpanIntersectsWithPosition } from 'typescript';

class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get salary() {
    return this.#salary;
  }

  set firstName(name) {
    if (typeof name !== 'string') {
      throw new Error(`"${name}" is not a string`);
    }
    if (!/^[A-Za-z]+$/.test(name)) {
      throw new Error(`"${name}" must contain only Latin letters`);
    }
    if (name.length < 2) {
      throw new Error(`"${name}" must be at least 2 characters long`);
    }
    if (name.length > 50) {
      throw new Error(`"${name}" must not exceed 50 characters`);
    }
    this._firstName = name;
  }

  set lastName(surname) {
    if (typeof surname !== 'string') {
      throw new Error(`"${surname}" is not a string`);
    }
    if (!/^[A-Za-z]+$/.test(surname)) {
      throw new Error(`"${surname}" must contain only Latin letters`);
    }
    if (surname.length < 2) {
      throw new Error(`"${surname}" must be at least 2 characters long`);
    }
    if (surname.length > 50) {
      throw new Error(`"${surname}" must not exceed 50 characters`);
    }
    this._lastName = surname;
  }

  set salary(sum) {
    if (typeof sum !== 'number' || isNaN(sum)) {
      throw new Error(`"${sum}" is not a number`);
    }
    if (sum <= 0) {
      throw new Error(`"${sum}" must be greater than 0`);
    }
    if (sum >= 100000) {
      throw new Error(`"${sum}" must be less than 100000`);
    }
    this.#salary = sum;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Developer extends Employee {
  #programmingLanguages = [];

  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.#programmingLanguages = programmingLanguages;
  }

  get programmingLanguages() {
    return [...this.#programmingLanguages];
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || !language.trim().length) {
      throw new Error(`"${language}" is not defined`);
    }
    return this.#programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  #teamSize;

  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }
  get teamSize() {
    return this.#teamSize;
  }
  set teamSize(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error(`${value} is not a valid team size`);
    }
    this.#teamSize = value;
  }

  increaseTeamSize() {
    return ++this.#teamSize;
  }
}

class Designer extends Employee {
  #designTools = [];

  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.#designTools = designTools;
  }

  get designTools() {
    return [...this.#designTools];
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string') {
      throw new Error(`"${tool}" is not defined`);
    }
    return this.#designTools.push(tool);
  }
}

class Company {
  #employees = [];

  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error(`Invalid employee: "${employee}" must be an instance of Employee`);
    }
    if (this.#employees.find((elem) => elem.firstName === employee.firstName && elem.lastName === employee.lastName)) {
      throw new Error(`Employee with full name "${employee.firstName} ${employee.lastName}" alredy exists`);
    }
    return this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const foundEmployee = this.#employees.find((name) => name.firstName === firstName);
    if (!foundEmployee) {
      throw new Error(`Employee with first name "${firstName}" not found`);
    }
    return foundEmployee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((name) => name.firstName === firstName);
  }

  removeEmployee(firstName) {
    const foundIndex = this.#getEmployeeIndex(firstName);
    if (foundIndex === -1) {
      throw new Error(`Employee with first name "${firstName}" not found`);
    }
    return this.#employees.splice(foundIndex, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, elem) => elem.salary + sum, 0);
  }

  getEmployeesByProfession(profession) {
    const professionClasses = { Developer, Manager, Designer };
    if (!Object.keys(professionClasses).includes(profession)) {
      throw new Error(`${profession} is not a valid profession`);
    }
    return this.#employees.filter((employee) => employee instanceof professionClasses[profession]);
  }
}

export { Employee, Company, Designer, Developer, Manager };

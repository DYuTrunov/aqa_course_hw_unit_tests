class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
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

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error(`The value '${value}' for firstname must be a string`);
    }
    if (!/^[A-Za-z]+$/.test(value)) {
      throw new Error(`The value '${value}' for firstname must contain only latin letters`);
    }
    if (value.length < 2) {
      throw new Error(`The value '${value}' for firstname must be at least 2 characters long`);
    }
    if (value.length > 50) {
      throw new Error(`The value '${value}' for firstname must not exceed 50 characters`);
    }
    this._firstName = value;
  }

  set lastName(value) {
    if (typeof value !== 'string') {
      throw new Error(`The value '${value}' for lastname is not a string`);
    }
    if (!/^[A-Za-z]+$/.test(value)) {
      throw new Error(`The value '${value}' for lastname must contain only latin letters`);
    }
    if (value.length < 2) {
      throw new Error(`The value '${value}' for lastname must be at least 2 characters long`);
    }
    if (value.length > 50) {
      throw new Error(`The value '${value}' for lastname must not exceed 50 characters`);
    }
    this._lastName = value;
  }

  set salary(value) {
    if (typeof value !== 'number') {
      throw new Error(`The value '${value}' for salary is not a number`);
    }
    if (value <= 0) {
      throw new Error(`The value '${value}' for salary must be greater than 0`);
    }
    if (value >= 100000) {
      throw new Error(`The value '${value}' for salary must be less than 100000`);
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Developer extends Employee {
  #programmingLanguages;

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
      throw new Error(`${value} is not a valid teamsize`);
    }
    this.#teamSize = value;
  }

  increaseTeamSize() {
    return ++this.#teamSize;
  }
}
class Designer extends Employee {
  #designTools;

  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.#designTools = designTools;
  }

  get designTools() {
    return [...this.#designTools];
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || !tool.trim().length) {
      throw new Error(`"${tool}" is not defined`);
    }
    return this.#designTools.push(tool);
  }
}
class Company {
  #employees;

  constructor(title, phone, address, employees = []) {
    if (typeof title !== 'string') {
      throw new Error(`The value '${title}' for title must be a string`);
    }
    if (!title.trim().length) {
      throw new Error(`The value '${title}' for titlecannot be empty or just whitespace`);
    }
    this._title = title;

    if (typeof phone !== 'number') {
      throw new Error(`The value '${phone}' for phone must be a number`);
    }
    this._phone = phone;

    if (typeof address !== 'string') {
      throw new Error(`The value '${address}' for address must be a string`);
    }
    if (!address.trim().length) {
      throw new Error(`The value '${address}' for address cannot be empty or just whitespace`);
    }
    this._address = address;

    if (!Array.isArray(employees)) {
      throw new Error(`The value '${employees}' for address must be an array`);
    }
    if (!employees.every((emp) => emp instanceof Employee)) {
      throw new Error('All elements in employees must be instances of Employee');
    }
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
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const foundEmployee = this.#employees.find((name) => name.firstName === firstName);
    if (!foundEmployee) {
      throw new Error(`Employee with firstname "${firstName}" not found`);
    }
    return foundEmployee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((name) => name.firstName === firstName);
  }

  removeEmployee(firstName) {
    const foundIndex = this.#getEmployeeIndex(firstName);
    if (foundIndex === -1) {
      throw new Error(`Employee with firstname "${firstName}" not found`);
    }
    return this.#employees.splice(foundIndex, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, elem) => elem.salary + sum, 0);
  }

  getEmployeesByProfession(profession) {
    const professionClasses = { Developer, Manager, Designer };
    if (!Object.keys(professionClasses).includes(profession)) {
      return [];
    }
    return this.#employees.filter((employee) => employee instanceof professionClasses[profession]);
  }
}

export { Employee, Company, Designer, Developer, Manager };

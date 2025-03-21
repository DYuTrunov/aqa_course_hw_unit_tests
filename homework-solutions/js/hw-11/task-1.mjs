class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get profession() {
    return this._profession;
  }

  get salary() {
    return this.#salary;
  }

  set firstName(name) {
    if (typeof name !== 'string') {
      throw new Error(`"${name}" is not a string`);
    }
    this._firstName = name;
  }

  set lastName(surname) {
    if (typeof surname !== 'string') {
      throw new Error(`"${surname}" is not a string`);
    }
    this._lastName = surname;
  }

  set profession(prof) {
    if (typeof prof !== 'string') {
      throw new Error(`"${prof}" is not a string`);
    }
    this._profession = prof;
  }

  set salary(sum) {
    if (typeof sum !== 'number') {
      throw new Error(`"${sum}" is not a number`);
    }
    if (sum < 0) {
      throw new Error(`"${sum}" must be greater than 0`);
    }
    this.#salary = sum;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
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
    return this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };

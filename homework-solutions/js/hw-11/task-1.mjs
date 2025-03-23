class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
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

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error(`The value '${value}' for firstname must be a string`);
    }
    this._firstName = value;
  }

  set lastName(value) {
    if (typeof value !== 'string') {
      throw new Error(`The value '${value}' for lastname must be a string`);
    }
    this._lastName = value;
  }

  set profession(value) {
    if (typeof value !== 'string') {
      throw new Error(`The value '${value}' for profession must be a string`);
    }
    this._profession = value;
  }

  set salary(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error(`The value '${value}' for salary must be a number`);
    }
    if (value <= 0) {
      throw new Error('The value for salary must be greater than 0');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address, employees = []) {
    if (typeof title !== 'string') {
      throw new Error(`The value '${title}' for title must be a string`);
    }
    if (!title.trim().length) {
      throw new Error('Title cannot be empty or just whitespace');
    }
    this._title = title;

    if (typeof phone !== 'number' || isNaN(phone)) {
      throw new Error(`The value '${phone}' for phone must be a number`);
    }
    this._phone = phone;

    if (typeof address !== 'string') {
      throw new Error(`The value '${address}' for address must be a string`);
    }
    if (!address.trim().length) {
      throw new Error('Address cannot be empty or just whitespace');
    }
    this._address = address;

    if (!Array.isArray(employees)) {
      throw new Error('Employees must be an array');
    }
    if (!employees.every((employee) => employee instanceof Employee)) {
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
    return this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };

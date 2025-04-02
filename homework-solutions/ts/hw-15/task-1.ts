// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".
interface IVehicle {
  getDetails(): string;
  start(): string;
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {
  constructor(
    public make: string,
    public model: string,
  ) {}
  public start(): string {
    return `The vehicle ${this.make} ${this.model} is starting.`;
  }
  public abstract getDetails(): string;
}

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    public year: number,
  ) {
    if (!make || !model || year <= 0) {
      throw new Error('Invalid vehicle data');
    }
    super(make, model);
  }
  public getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

// 4. Создайте объект класса Car и проверьте работоспособность
const volvo = new Car('Volvo', 'XC90', 2010);
console.log(volvo.make);
console.log(volvo.model);
console.log(volvo.year);
console.log(volvo.start());
console.log(volvo.getDetails());

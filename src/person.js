export class Person {
  // "export" is used to let outside to access person class. Elements in modules are by default private
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

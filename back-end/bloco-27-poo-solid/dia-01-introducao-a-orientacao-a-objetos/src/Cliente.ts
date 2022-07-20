class Cliente {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const cliente1: Cliente = new Cliente('Mara');

console.log(cliente1.name);


export default Cliente;
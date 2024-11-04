import Propietario from './propietario.js';

export default class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }

  get tipo() {
    return `El tipo de animal es un: ${this._tipo}.`;
  }
}

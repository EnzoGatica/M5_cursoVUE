// Cliente.js
import Impuesto from './impuesto.js';

export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  // Getter y Setter para nombre
  get nombre() {
    return this._nombre;
  }

  set nombre(valor) {
    this._nombre = valor;
  }

  // Método para calcular el impuesto anual
  calcularImpuesto() {
    const { montoBrutoAnual, deducciones } = this._impuesto;
    return (montoBrutoAnual - deducciones) * 0.21;
  }
}

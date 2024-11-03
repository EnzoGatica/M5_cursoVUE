// Impuesto.js
export default class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
      this._montoBrutoAnual = montoBrutoAnual;
      this._deducciones = deducciones;
    }
  
    // Getter y Setter para montoBrutoAnual
    get montoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  
    set montoBrutoAnual(valor) {
      this._montoBrutoAnual = valor;
    }
  
    // Getter y Setter para deducciones
    get deducciones() {
      return this._deducciones;
    }
  
    set deducciones(valor) {
      this._deducciones = valor;
    }
  }
  
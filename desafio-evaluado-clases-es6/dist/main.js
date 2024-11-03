// main.js
import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

// Crear una instancia de Impuesto
var impuestoCliente = new Impuesto(50000, 10000);

// Crear una instancia de Cliente
var cliente = new Cliente('XYZ Consultores', impuestoCliente);

// Calcular e imprimir el impuesto
console.log("El impuesto anual de ".concat(cliente.nombre, " es: $").concat(cliente.calcularImpuesto()));
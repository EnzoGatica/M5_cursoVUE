// main.js
import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

// Crear una instancia de Impuesto
const impuestoCliente = new Impuesto(50000, 10000);

// Crear una instancia de Cliente
const cliente = new Cliente('XYZ Consultores', impuestoCliente);

// Calcular e imprimir el impuesto
console.log(`El impuesto anual de ${cliente.nombre} es: $${cliente.calcularImpuesto()}`);

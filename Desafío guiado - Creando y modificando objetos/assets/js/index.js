// 1. Crear una función constructora para el objeto Paciente.
function Paciente(nombre, edad, rut, diagnostico) {
    // Propiedades privadas usando closures
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;
  
    // Getters y setters para nombre
    this.getNombre = function() {
      return _nombre;
    };
    this.setNombre = function(nuevoNombre) {
      _nombre = nuevoNombre;
    };
  
    // Getters y setters para edad
    this.getEdad = function() {
      return _edad;
    };
    this.setEdad = function(nuevaEdad) {
      _edad = nuevaEdad;
    };
  
    // Getters y setters para rut
    this.getRut = function() {
      return _rut;
    };
    this.setRut = function(nuevoRut) {
      _rut = nuevoRut;
    };
  
    // Getters y setters para diagnostico
    this.getDiagnostico = function() {
      return _diagnostico;
    };
    this.setDiagnostico = function(nuevoDiagnostico) {
      _diagnostico = nuevoDiagnostico;
    };
  }
  
  // 2. Crear una función constructora para el objeto Consultorio.
  function Consultorio(nombre) {
    this.nombre = nombre;
    this.pacientes = []; // Arreglo para almacenar múltiples pacientes
  
    // Método para agregar pacientes al consultorio
    this.agregarPaciente = function(paciente) {
      this.pacientes.push(paciente);
    };
  }
  
  // 3. Métodos en Consultorio para mostrar todos los pacientes y buscar por nombre
  Consultorio.prototype.mostrarTodosLosPacientes = function() {
    this.pacientes.forEach((paciente) => paciente.mostrarDatos());
  };
  
  Consultorio.prototype.buscarPacientePorNombre = function(nombre) {
    const pacienteEncontrado = this.pacientes.find(
      (paciente) => paciente.getNombre().toLowerCase() === nombre.toLowerCase()
    );
    if (pacienteEncontrado) {
      console.log("Paciente encontrado:");
      pacienteEncontrado.mostrarDatos();
    } else {
      console.log("Paciente no encontrado.");
    }
  };
  
  // Método en Paciente para mostrar sus datos
  Paciente.prototype.mostrarDatos = function() {
    console.log(`Nombre: ${this.getNombre()}`);
    console.log(`Edad: ${this.getEdad()}`);
    console.log(`RUT: ${this.getRut()}`);
    console.log(`Diagnóstico: ${this.getDiagnostico()}`);
  };
  
  // 4. Crear el consultorio e instanciar pacientes
  const consultorio = new Consultorio("Consultorio Central");
  
  const paciente1 = new Paciente("Juan Pérez", 30, "12345678-9", "Hipertensión");
  const paciente2 = new Paciente("María López", 25, "98765432-1", "Diabetes");
  const paciente3 = new Paciente("Carlos Ramírez", 40, "11223344-5", "Asma");
  
  // Agregar pacientes al consultorio
  consultorio.agregarPaciente(paciente1);
  consultorio.agregarPaciente(paciente2);
  consultorio.agregarPaciente(paciente3);
  
  // Ejemplo de uso
  console.log("Mostrando todos los pacientes en el consultorio:");
  consultorio.mostrarTodosLosPacientes();
  
  console.log("\nBuscando paciente por nombre:");
  consultorio.buscarPacientePorNombre("María López");
  
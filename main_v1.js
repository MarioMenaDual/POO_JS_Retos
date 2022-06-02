const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
      "Curso Definitivo de HTML y CSS",
      "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    },
  };

  //Un prototipo de objeto para crear n obejetos 
function Student (name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  // *** Metodo adentro del del prototipo de objeto ***/
  //this.passCourse = function (newCourse)  {
  //    this.approvedCourse.push(newCourse);
  //}
}
//Una forma nueva de definir el metodo fuera del del prototipo

  Student.prototype.aprobarCurso = function (nuevoCursito)  {
      this.cursosAprobados.push(nuevoCursito);
  }

// Creamos una instancia del prototipo Student 

const juanita = new Student(
  'Juanita Alejandra',
  15,
  [
  "Curso de Introduccion a la Produccion de Videojuegos",
  "Curso de creacion de personajes",
  ],

) 


// Prototipos con la sintaxis de clases
class Student2 {
  constructor({
    name,
    cursosAprobados = [],
    age,
    email,
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelito@platzi.com",
});
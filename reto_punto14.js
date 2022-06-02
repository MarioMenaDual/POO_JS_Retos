//Para hacer la herencia usando la sintaxis de prototipos podemos hacer lo siguiente:
 

 //Super Clase Student
 function Student ({name,edad,cursosAprobados = []
 }) {
    this.name = name;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
  }
//clase (FreeStudent) que va a pasar los parámetros de inicialización al constructor de la superclase, para esto hacemos uso de la función call().

function FreeStudent(props) {
  Student.call(this, props);
}
//Le pasamos como primer atributo el contexto de ejecución de nuestra nueva “clase” y como segundo parámetro los props, que son estas propiedades que recibiremos de inicialización.
 
//Después de esto, clonamos el prototipo de nuestra superclase en el prototipo de nuestra subclase:

FreeStudent.prototype = Object.create(Student.prototype);

//Por último, le agregamos cualquier función extra que deseemos agregar a la subclase:

FreeStudent.prototype.approveCourse = function (newCourse) {
  if (newCourse.isFree) {
    this.cursosAprobados.push(newCourse);
  } else {
    console.warn(`Lo sentimos, ${this.name}, sólo puedes tomar cursos gratis`);
  }
}

//Instancia de la subclase FreeStudent con todas las caracteristicas de la superclase
const mario = new FreeStudent({
    name: "Mario Mena",
    edad: 12,
});

//Aqui se pasaria un curso con propiedad isFree = TRUE
mario.approveCourse({name:'Curso 1',isFree: true})
console.log(mario);
//Si se pasa un curso con propiedad isFree = false nos marcaria error y no dejaria agregarlo
mario.approveCourse({name:'Curso 2',isFree: false})
console.log(mario);
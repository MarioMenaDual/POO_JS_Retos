class LearningPath {
constructor({
  name,
  courses = [],
}){
  this.name = name;
  this.courses = courses;
}
//Metodo para añadir nuevos cursos
addCourse(newCouse){
this.courses.push(newCouse);
}
}

const escuelaWeb = new LearningPath({
  name: "Escuela de desarrollo web",
  courses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS",
    "Curso de Responsive Design"
  ]
});
const escuelaData = new LearningPath(
  {
    name: "Escuela de Datos",
    courses: [
      "Curso Definitivo de Bases de Datos",
      "Curso Practico de Bases de datos",
      "Curso de SQL"
    ]
  }
);
const escuelaVgs = new LearningPath(
  {
    name: "Escuela de Videojuegos",
    courses: [
      "Curso Introduccion a la Produccion de Vgs",
      "Curso de Unreal Engine",
      "Curso de Unity 3D"
    ]
  }
);

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});
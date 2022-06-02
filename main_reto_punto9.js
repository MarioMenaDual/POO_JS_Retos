//Clase Aporte
class Aporte {
    constructor({
        autor,
        comment,
        datetime,
        answers = [],
    }){
        this.autor = autor;
        this.comment = comment;
        this.datetime = datetime;
        this.answers = answers;
    }
}

class Pregunta {
    constructor({
        autor,
        comment,
        datetime,
        answers = [],
    }){
        this.autor = autor;
        this.comment = comment;
        this.datetime = datetime;
        this.answers = answers;
    }
}

//Clase de ClaseCurso
class ClaseCurso{
    constructor({
        id,
        titulo,
        aportes=[],
        preguntas=[],
    }){
        this.id = id;
        this.titulo = titulo;
        this.aportes = aportes;
        this.preguntas = preguntas;
    }
}

//Clase learning path
class LearningPath{
    constructor({
        name,
        courses=[],
    })
    {
        this.name=name;this.courses=courses;
    }
}

//Clase Teacher
class Teacher{
    constructor({
        name,
        rol,
        description,
    })
    {
        this.name=name;
        this.rol=rol;
        this.description=description;
    }}

//Clase Course
class Course{
    constructor({
        name,
        teacher,
        classes=[],
    })
    {
        this.name=name;
        this.teacher=teacher;
        this.classes=classes;
    }}

// Clase Student
class Student{
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram=undefined,
        facebook=undefined,
        approvedCourses=[],
        learningPaths=[],
    })
    {
        this.name=name;
        this.email=email;
        this.username=username;
        this.socialMedia={twitter,instagram,facebook,};
        this.approvedCourses=approvedCourses;
        this.learningPaths=learningPaths;
    }}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Instancias de Preguntas
pregunta1 = new Pregunta({
    autor: "Juan",
    comment: "Porque me sale este error?",
    datetime: "10/02/2020 21:20:18"
})

pregunta2 = new Pregunta({
    autor: "Miguel",
    comment: "Es buena practica hacer esto?",
    datetime: "13/02/2020 11:10:19"
})

//Instancias de Aportes
aporte1 = new Aporte({
    autor: "Juan",
    comment: "Aqui esta mi codigo para esta clase $a= 1",
    datetime: "10/02/2020 20:16:08"
})

aporte2 = new Aporte({
    autor: "Miguel",
    comment: "Les recomiendo ir a este link https://www.google.com",
    datetime: "12/02/2020 12:02:21"
})


//Instancias de clases de curso
const clase1Data = new ClaseCurso({
    id: 1,
    titulo: "Clase 1 Data",
    //Pasando instancias de Aporte a ClaseCurso
    aportes: [aporte1,aporte2],
    //Pasando instancias de Pregunta a ClaseCurso
    preguntas: [pregunta1,pregunta2],
})
const clase2Data = new ClaseCurso({
    id: 2,
    titulo: "Clase 2 Data"
})

//Instancias de la clase Teacher
const teacherFreddy = new Teacher({
    name: "Freddy Vega",
    rol: "CEO",
    description: "Es un instructor de platzti y ceo......"
})

//Instancias de la clase course
const cursoProgBasica=new Course({
    name:"Curso Gratis de Programación Básica",
//Pasando instancias de Teacher a un Course
    teacher: teacherFreddy,
    classes: [
//Pasando instancias de ClaseCurso a un Course
        clase1Data,
        clase2Data,
    ]
});

const cursoDefinitivoHTML=new Course({
    name:"Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML=new Course({
    name:"Curso Practico de HTML y CSS",
});




//Instancias de la clase Learning Path
const escuelaWeb=new LearningPath({
    name:"Escuela de Desarrollo Web",
    courses:[cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData=new LearningPath({
    name:"Escuela de Data Science",
    courses:[cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",],
    });

const escuelaVgs=new LearningPath({
    name:"Escuela de Vidweojuegos",
    courses:[
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
})

//Instancias de la clase student
const juan2=new Student({
    name:"JuanDC",
    username:"juandc",
    email:"juanito@juanito.com",
    twitter:"fjuandc",
    learningPaths:[escuelaWeb,escuelaVgs,],
});

const miguelito2=new Student({
    name:"Miguelito",
    username:"migelitofeliz",
    email:"miguelito@juanito.com",
    instagram:"migelito_feliz",
    learningPaths:[escuelaWeb,escuelaData,],
});







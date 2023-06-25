import { createWebHistory, createRouter } from "vue-router";
import Course from "../views/Course/Course.vue";
import CourseDetails from "../views/Course/CourseDetails.vue";
import Subject from "../views/Subject/Subject.vue";
import SubjectDetails from "../views/Subject/SubjectDetails.vue";
import Student from "../views/Student/Student.vue";
import StudentDetails from "../views/Student/StudentDetails.vue";

const routes = [
  {
    path: "/course",
    name: "Cursos",
    component: Course,
  },
  {
    path: "/course/:id",
    name: "DetalhesCurso",
    component: CourseDetails,
  },
  {
    path: "/course/new",
    name: "NovoCurso",
    component: CourseDetails,
  },


  {
    path: "/subject",
    name: "Disciplinas",
    component: Subject,
  },
  {
    path: "/subject/:id",
    name: "DetalhesDisciplina",
    component: SubjectDetails,
  },
  {
    path: "/subject/new",
    name: "NovaDisciplina",
    component: SubjectDetails,
  },

  {
    path: "/student",
    name: "Estudante",
    component: Student,
  },
  {
    path: "/student/:id",
    name: "DetalhesEstudante",
    component: StudentDetails,
  },
  {
    path: "/student/new",
    name: "NovoEstudante",
    component: StudentDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
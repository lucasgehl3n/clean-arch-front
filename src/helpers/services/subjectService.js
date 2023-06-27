import routeManager from "../../router/routeManager";
import axios from "axios";
import Constants from "../../../constants";
export default {
    getSubjects: async () => {
        return await routeManager.getListEntity('subject');
    },
    getCourseSubjects: async (idCourse) => {
        return await axios.get(`${Constants.URL_ADRESS}/GetSubjectsCourse/${idCourse}`);
    },
    getSubject: async (id) => {
        return await axios.get(`${Constants.URL_ADRESS}/subject/${id}`);
    },
    mapSubjectsSelect: (subjectsAvailable) => {
        return subjectsAvailable.map((x) => ({
                value: x.id,
                name: x.name,
            }));
    }
}
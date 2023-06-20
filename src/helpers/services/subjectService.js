import routeManager from "../../router/routeManager";
import axios from "axios";
import Constants from "../../../constants";
export default {
    getSubjects: async () => {
        return await routeManager.getListEntity('subject');
    },
    getSubject: async (id) => {
        return await axios.get(`${Constants.URL_ADRESS}/subject/${id}`);
    },
}
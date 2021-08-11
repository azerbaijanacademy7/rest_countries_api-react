import http from "./http";
import {ApplicationDto} from "../../interfaces/dtos/application.dto";

class AllCountriesService {
  getAll() {
    return http.get("/all");
  }
  get(alpha3Code: string) {
    return http.get(`/all/${alpha3Code}`);
  }

//   get(id: string) {
//     return http.get(`/tutorials/${id}`);
//   }

//   create(data: ITutorialData) {
//     return http.post("/tutorials", data);
//   }

//   update(data: ITutorialData, id: any) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id: any) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title: string) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new AllCountriesService();
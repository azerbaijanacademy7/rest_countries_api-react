import http from "./http";
import {ApplicationDto} from "../../interfaces/dtos/application.dto";

class AllCountriesService {
  getAll() {
    return http.get("/all");
  }
  getSingle(alpha3Code: string) {
    return http.get(`/alpha/${alpha3Code}`);
  }
}

export default new AllCountriesService();
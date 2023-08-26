import http from "./httpCommon";

class StudentDataService {
  getAll() {
    return http.get("/genre/movie/list");
  }

  // get(id: number) {
  //   return http.get(`/students/${id}`);
  // }

  // create(data: object) {
  //   return http.post("/students", data);
  // }

  // update(id: number, data: object) {
  //   return http.put(`/students/${id}`, data);
  // }

  // delete(id: number) {
  //   return http.delete(`/students/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/students`);
  // }

  // findByPhoneNumber(phoneNumber: number) {
  //   return http.get(`/students?phoneNumber=${phoneNumber}`);
  // }
}

export default new StudentDataService();
